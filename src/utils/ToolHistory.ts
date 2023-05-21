/**
 * 拼接请求参数
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 */
export const joinUrlParams = (url: string, params: Record<string, unknown>) => {
  if (!params) {
    return;
  }
  const paramsArray: Array<string> = [];
  Object.keys(params).forEach((key) => {
    let value = params[key];
    if (value && typeof value !== "string") {
      value = JSON.stringify(value);
    }
    // 拼接参数,使用encodeURIComponent对参数进行编码,让浏览器能够识别.
    if (value) {
      paramsArray.push(`${key}=${encodeURIComponent(value as string)}`);
    }
  });
  if (paramsArray.length > 0) {
    if (!url) {
      url = paramsArray.join("&");
    } else if (url.search(/\?/) === -1) {
      url += `?${paramsArray.join("&")}`;
    } else {
      url += `&${paramsArray.join("&")}`;
    }
  }
  return url;
};
/**
 * 解析请求参数
 */
export const getUrlParams = () => {
  const result: Record<string, unknown> = {};
  // 参数数组
  let paramsArray = [];
  // 使用webpack服务时,url中可能有多个?,选最后的?即可
  const index = window.location.href.lastIndexOf("?");
  if (index >= 0) {
    const paramsStr = window.location.href.substring(index + 1, window.location.href.length);
    paramsArray = paramsStr.split("&");
  } else {
    return result;
  }
  paramsArray.forEach((keyValueStr) => {
    const keyValue = keyValueStr.split("=");
    // 参数名
    const key = keyValue[0];
    // 参数值,使用decodeURIComponent对encodeURIComponent编码进行解码
    let value = decodeURIComponent(keyValue[1]);
    // 如果是JSON格式,就转为对象
    if (value[0] === "{" && value[value.length - 1] === "}") {
      value = JSON.parse(value);
    }
    result[key] = value;
  });
  return result;
};
