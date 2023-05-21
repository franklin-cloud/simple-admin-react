type StorageType = "LOCAL_STORAGE" | "SESSION_STORAGE";

const storagePrefix = "system";
const defaultType = "LOCAL_STORAGE";
const storageTypeEnum = {
  LOCAL_STORAGE: window.localStorage,
  SESSION_STORAGE: window.sessionStorage,
};

/**
 * 设置缓存
 * @param key 缓存key
 * @param value 缓存值，支持字符串跟对象
 * @param type 缓存类型
 */
export function setItem(key: string, value: string | Record<string, unknown>, type: StorageType = defaultType) {
  const _key = storagePrefix + key;
  if (typeof value === "string") {
    value = {
      valueType: "string",
      value,
    };
  }
  const valueStr = JSON.stringify(value);
  storageTypeEnum[type].setItem(_key, valueStr);
}

/**
 * 获取缓存
 * @param key 缓存key
 * @param type 缓存类型
 */
export function getItem(key: string, type: StorageType = defaultType) {
  const _key = storagePrefix + key;
  const valueStr = storageTypeEnum[type].getItem(_key);
  if (valueStr) {
    const valueObj = JSON.parse(valueStr);
    if (valueObj.valueType === "string") {
      return valueObj.value;
    }
  } else {
    return "";
  }
}

/**
 * 删除某个缓存
 * @param key 缓存key
 * @param type 缓存类型
 */
export function removeItem(key: string, type: StorageType = defaultType) {
  const _key = storagePrefix + key;
  storageTypeEnum[type].removeItem(_key);
}

/**
 * 删除全部缓存
 * @param type 缓存类型
 */
export function clear(type: StorageType = defaultType) {
  storageTypeEnum[type].clear();
}
