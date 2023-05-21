/**
 * 金额格式化
 * @param {string | number} value 金额
 * @param {string} separator 分隔符
 * @param {string} prefix 前缀
 * @param {number} type 类型 0: 格式化，1:格式化还原
 */
export const money = (value: string | number, separator = ",", prefix = "", type = 0) => {
  if (!value) {
    return 0;
  }
  let valueStr = "";
  if (typeof value === "number") {
    valueStr = value.toString();
  }
  if (type === 0) {
    valueStr = prefix ? `${prefix} ${valueStr}` : valueStr;
    // \B是非单词边界。边界是指两个字符的中间位置。x(?=y)匹配'x'仅仅当'x'后面跟着'y'；x(?!y)匹配'x'仅仅当'x'后面不跟着'y'。
    return valueStr.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  } else {
    const re = new RegExp(`\\${prefix}\\s?|(${separator}*)`, "g");
    return valueStr.replace(re, "");
  }
};
