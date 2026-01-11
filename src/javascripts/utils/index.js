import qs from "qs";
import mime from "mime";

/**
 * URL 地址组装函数
 * @param {string} originalUrl - 原始 URL（可能是完整的 URL、path，后面可能会有参数）
 * @param {object} params - 需要修改的参数 hash
 * @param {boolean} isOverride - 是否直接覆盖url中参数，默认是 false: 为 true 时，params 会覆盖现有参数，为 false 时，params 会与现有参数合并
 * @param {boolean} isRemoveEmpty - 是否移除空值参数，默认是 true
 * @returns {string} 组装后的 URL
 */
export function buildUrl(originalUrl, params = {}, isOverride = false, isRemoveEmpty = true) {
  if (!originalUrl) {
    return "";
  }

  // 解析原始 URL（使用 base URL 可以处理相对路径）
  let url = new URL(originalUrl, window.location.origin);

  // 获取现有的查询参数
  const existingParams = qs.parse(decodeURIComponent(url.search), { ignoreQueryPrefix: true });

  // 合并参数（新参数会覆盖现有参数）
  const mergedParams = isOverride ? params : { ...existingParams, ...params };

  // 移除空值参数
  if (isRemoveEmpty) {
    Object.keys(mergedParams).forEach(key => {
      if (mergedParams[key] === null || mergedParams[key] === undefined || mergedParams[key] === '') {
        delete mergedParams[key];
      }
    })
  }

  url.search = qs.stringify(mergedParams, { arrayFormat: "brackets" });

  return url.toString();
}

/**
 * 更新当前页面的 URL 查询参数，不触发页面重新加载
 * @param {object} params - 需要更新的参数 hash
 * @param {string} action - 更新方式，默认是 'push'，也可以是 'replace'
 * @param {boolean} isOverride - 是否直接覆盖原始params，默认是 false
 */
export function updateQuery(params, action = 'push', isOverride = true) {
  let url = new URL(window.location.href);

  // 使用 qs 库处理参数，与 buildUrl 保持一致
  let mergedParams = {};

  if (!isOverride) {
    // 如果不是覆盖模式，先获取现有参数
    mergedParams = qs.parse(decodeURIComponent(url.search), { ignoreQueryPrefix: true });
  }

  // 合并新参数
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') {
      delete mergedParams[key];
    } else {
      mergedParams[key] = value;
    }
  });

  // 使用 qs.stringify 构建查询字符串
  url.search = qs.stringify(mergedParams, { arrayFormat: "brackets" });

  if (action === 'push') {
    history.pushState({}, "", url);
  } else {
    history.replaceState({}, "", url);
  }
}

/**
 * 通过传入的 URL 获取查询参数，并返回一个对象
 * @param {string} url - 需要获取查询参数的 URL
 * @returns {object} 查询参数对象
 */
export function getQueryParams(urlString) {
  if (!urlString) {
    return {};
  }

  const url = new URL(urlString, window.location.origin);
  return qs.parse(decodeURIComponent(url.search), { ignoreQueryPrefix: true });
}

/**
 * 根据文件名和 content_type 生成完整的文件名（如果没有后缀则添加）
 * @param {string} filename - 文件名
 * @param {string} contentType - MIME 类型（如 'image/jpeg', 'application/pdf'）
 * @returns {string} 完整的文件名（如果原文件名没有后缀且提供了 content_type，则添加扩展名）
 */
export function getFilenameWithExtension(filename, contentType) {
  if (!filename) {
    return filename;
  }

  // 检查文件名是否已有扩展名
  const hasExtension = /\.\w+$/.test(filename);

  // 如果文件名已有扩展名，直接返回
  if (hasExtension) {
    return filename;
  }

  // 如果文件名没有扩展名且提供了 content_type，则根据 content_type 生成扩展名
  if (contentType) {
    // 移除可能的参数（如 charset）
    const mimeType = contentType.split(';')[0].trim();
    const extension = mime.getExtension(mimeType);

    if (extension) {
      return `${filename}.${extension}`;
    }
  }

  return filename;
}
