/**
 * 文件类型识别工具
 * 使用 mime 库根据文件扩展名或 MIME 类型判断文件类型
 */

import mime from "mime";

/**
 * 获取文件扩展名
 * @param {File} file - 文件对象
 * @returns {string} 扩展名（不含点号）
 */
export function getFileExtension(file) {
  if (!file) return '';
  const filename = file.name;

  const match = filename.match(/\.([^.]+)$/);
  if (match) {
    return match ? match[1].toLowerCase() : '';
  } else {
    return mime.getExtension(file.type) || '';
  }
}

/**
 * 获取文件的 MIME 类型
 * @param {File} file - 文件对象
 * @returns {string} MIME 类型
 */
export function getMimeType(file) {
  if (!file) return '';
  // 优先使用文件对象的 type 属性
  if (file.type) {
    return file.type;
  }

  // 如果没有，使用 mime 库根据扩展名获取
  const ext = getFileExtension(file);
  if (ext) {
    return mime.getType(ext) || '';
  }
  return '';
}

/**
 * 判断文件是否为图片（含 SVG，部分浏览器对 .svg 的 MIME 不可靠）
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isImage(file) {
  if (!file) return false;
  const ext = getFileExtension(file);
  if (ext === 'svg') return true;
  const mimeType = getMimeType(file);
  return mimeType.startsWith('image/');
}

/**
 * 判断文件是否为视频
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isVideo(file) {
  if (!file) return false;
  const mimeType = getMimeType(file);
  return mimeType.startsWith('video/');
}

/**
 * 判断文件是否为音频
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isAudio(file) {
  if (!file) return false;
  const mimeType = getMimeType(file);
  return mimeType.startsWith('audio/');
}

/**
 * 判断文件是否为 PDF
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isPDF(file) {
  if (!file) return false;
  const mimeType = getMimeType(file);
  return mimeType === 'application/pdf';
}

/**
 * 判断文件是否为 Word 文档
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isWord(file) {
  if (!file) return false;
  const mimeType = getMimeType(file);
  const ext = getFileExtension(file);
  return mimeType.includes('word') ||
         mimeType.includes('msword') ||
         mimeType.includes('document') ||
         ['doc', 'docx'].includes(ext);
}

/**
 * 判断文件是否为 Excel 文档
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isExcel(file) {
  if (!file) return false;
  const mimeType = getMimeType(file);
  const ext = getFileExtension(file);
  return mimeType.includes('excel') ||
         mimeType.includes('spreadsheet') ||
         mimeType.includes('ms-excel') ||
         ['xls', 'xlsx'].includes(ext);
}

/**
 * 判断文件是否为 PPT 文档
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isPPT(file) {
  if (!file) return false;
  const mimeType = getMimeType(file);
  const ext = getFileExtension(file);
  return mimeType.includes('presentation') ||
         mimeType.includes('ms-powerpoint') ||
         ['ppt', 'pptx'].includes(ext);
}

/**
 * 判断文件是否为压缩包
 * @param {File} file - 文件对象
 * @returns {boolean}
 */
export function isArchive(file) {
  if (!file) return false;
  const mimeType = getMimeType(file);
  const ext = getFileExtension(file);
  return mimeType.includes('zip') ||
         mimeType.includes('archive') ||
         mimeType.includes('compressed') ||
         ['zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'xz'].includes(ext);
}

/**
 * 获取文件类型信息
 * @param {File} file - 文件对象
 * @returns {object} 包含 type, icon, iconColor, label, bgColor, tagColor, tagText 的对象
 */
export function getFileTypeInfo(file) {
  if (!file) {
    return {
      type: 'other',
      icon: 'ri-file-line',
      iconColor: 'text-gray-400',
      label: '其他',
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      tagColor: 'bg-primary',
      tagText: '其他'
    };
  }

  if (isImage(file)) {
    return {
      type: 'image',
      icon: 'ri-image-line',
      iconColor: 'text-gray-400',
      label: '图片',
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      tagColor: 'bg-primary',
      tagText: '图片'
    };
  }

  if (isVideo(file)) {
    return {
      type: 'video',
      icon: 'ri-play-circle-line',
      iconColor: 'text-gray-400',
      label: '视频',
      bgColor: 'bg-gray-100 dark:bg-gray-700',
      tagColor: 'bg-black/70',
      tagText: '视频'
    };
  }

  if (isAudio(file)) {
    return {
      type: 'audio',
      icon: 'ri-music-2-line',
      iconColor: 'text-purple-500',
      label: '音频',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      tagColor: 'bg-black/70',
      tagText: '音频'
    };
  }

  if (isPDF(file)) {
    return {
      type: 'pdf',
      icon: 'ri-file-pdf-line',
      iconColor: 'text-red-500',
      label: 'PDF',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      tagColor: 'bg-red-500',
      tagText: 'PDF'
    };
  }

  if (isWord(file)) {
    return {
      type: 'word',
      icon: 'ri-file-word-line',
      iconColor: 'text-blue-500',
      label: 'DOC',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      tagColor: 'bg-blue-500',
      tagText: 'DOC'
    };
  }

  if (isExcel(file)) {
    return {
      type: 'excel',
      icon: 'ri-file-excel-line',
      iconColor: 'text-green-500',
      label: 'XLS',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      tagColor: 'bg-green-500',
      tagText: 'XLS'
    };
  }

  if (isPPT(file)) {
    return {
      type: 'ppt',
      icon: 'ri-file-ppt-line',
      iconColor: 'text-orange-500',
      label: 'PPT',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      tagColor: 'bg-orange-500',
      tagText: 'PPT'
    };
  }

  if (isArchive(file)) {
    return {
      type: 'archive',
      icon: 'ri-file-zip-line',
      iconColor: 'text-yellow-500',
      label: 'ZIP',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      tagColor: 'bg-yellow-500',
      tagText: 'ZIP'
    };
  }

  return {
    type: 'other',
    icon: 'ri-file-line',
    iconColor: 'text-gray-400',
    label: '其他',
    bgColor: 'bg-gray-100 dark:bg-gray-700',
    tagColor: 'bg-primary',
    tagText: '其他'
  };
}

/**
 * 格式化文件大小
 * @param {number} bytes - 字节数
 * @returns {string} 格式化后的文件大小
 */
export function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
