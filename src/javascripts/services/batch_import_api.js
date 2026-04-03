/**
 * 批量上传 API 服务
 * 处理所有与 Baklib API 的交互
 */

/**
 * 通过 full_path 获取页面数据
 * @param {string} apiUrl - API 地址
 * @param {string} token - API token
 * @param {string} siteId - 站点 ID
 * @param {string} fullPath - 页面路径
 * @returns {Promise<Object>} 页面数据
 */
export async function getPageByPath(apiUrl, token, siteId, fullPath) {
  const response = await fetch(
    `${apiUrl}/api/v1/sites/${siteId}/pages/by_path/${fullPath}`,
    {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`获取页面数据失败: ${errorText}`);
  }

  const json = await response.json();
  return json.data;
}

/**
 * 按名称精确匹配查询站点标签（用于获取标签 id/iid）
 * @param {string} apiUrl - API 地址
 * @param {string} token - API token
 * @param {string} siteId - 站点 ID
 * @param {string} name - 标签名称
 * @returns {Promise<Object|null>} 标签数据（含 id、attributes.id、attributes.iid），未找到返回 null
 */
export async function getTagByName(apiUrl, token, siteId, name) {
  const params = new URLSearchParams({ 'q[name_eq]': name, 'page[number]': '1', 'page[size]': '1' })
  const response = await fetch(
    `${apiUrl}/api/v1/sites/${siteId}/tags?${params}`,
    {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`获取标签失败: ${errorText}`)
  }

  const json = await response.json()
  const list = json.data && Array.isArray(json.data) ? json.data : []
  const tag = list[0] || null
  return tag
}

/**
 * 批量按名称查询标签，返回标签 id 列表（优先使用 iid，否则 id）
 * @param {string} apiUrl - API 地址
 * @param {string} token - API token
 * @param {string} siteId - 站点 ID
 * @param {string[]} names - 标签名称列表
 * @returns {Promise<number[]>} 标签 id 列表（未匹配到的名称会跳过）
 */
export async function getTagIdsByNames(apiUrl, token, siteId, names) {
  if (!names || names.length === 0) return []
  const tags = await Promise.all(
    names.map((name) => getTagByName(apiUrl, token, siteId, name))
  )
  return tags
    .filter(Boolean)
    .map((tag) => tag.attributes?.iid ?? tag.attributes?.id ?? tag.id)
    .filter((id) => id != null)
}

/**
 * 上传文件到 DAM（带进度回调）
 * @param {string} apiUrl - API 地址
 * @param {string} token - API token
 * @param {File} file - 文件对象
 * @param {string} name - 文件名（含扩展名）
 * @param {string} description - 文件描述
 * @param {Function} onProgress - 进度回调函数 (progress: number) => void
 * @returns {Promise<Object>} 上传结果
 */
export async function uploadFile(apiUrl, token, file, name, description = '', onProgress = null) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('data[attributes][name]', name);
    formData.append('data[attributes][description]', description);
    formData.append('data[attributes][file]', file);
    if (file.type) {
      formData.append('data[attributes][content_type]', file.type);
    }

    const xhr = new XMLHttpRequest();

    // 监听上传进度
    if (onProgress) {
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = Math.round((e.loaded / e.total) * 100);
          onProgress(percentComplete);
        }
      });
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const json = JSON.parse(xhr.responseText);
          const data = Array.isArray(json.data) ? json.data[0] : json.data;
          resolve(data);
        } catch (e) {
          reject(new Error(`解析响应失败: ${e.message}`));
        }
      } else {
        reject(new Error(`上传失败: ${xhr.statusText} - ${xhr.responseText}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error('上传请求失败'));
    };

    xhr.open('POST', `${apiUrl}/api/v1/dam/files?include_signed_id=true&purpose=dynamic_form`);
    xhr.setRequestHeader('Authorization', token);
    xhr.send(formData);
  });
}

/**
 * 创建页面
 * @param {string} apiUrl - API 地址
 * @param {string} token - API token
 * @param {string} siteId - 站点 ID
 * @param {Object} pageData - 页面数据
 * @returns {Promise<Object>} 创建的页面数据
 */
export async function createPage(apiUrl, token, siteId, pageData) {
  const payload = {
    data: {
      attributes: pageData
    }
  };

  const response = await fetch(`${apiUrl}/api/v1/sites/${siteId}/pages`, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errorDetails = `HTTP error ${response.status}`;
    try {
      const errorText = await response.text();
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.message) {
          errorDetails = errorJson.message;
        } else if (errorJson.errors) {
          if (Array.isArray(errorJson.errors)) {
            errorDetails = errorJson.errors.map(e =>
              typeof e === 'string' ? e : (e.detail || e.title || JSON.stringify(e))
            ).join('; ');
          } else {
            errorDetails = JSON.stringify(errorJson.errors);
          }
        } else {
          errorDetails = errorText;
        }
      } catch (e) {
        errorDetails = errorText || response.statusText;
      }
    } catch (readError) {
      // ignore
    }
    throw new Error(`创建页面失败: ${errorDetails}`);
  }

  const json = await response.json();
  return Array.isArray(json.data) ? json.data[0] : json.data;
}
