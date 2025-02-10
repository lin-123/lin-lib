/**
 * 前端缓存工具
 *
 * API
 * local:
 *    local.set(key, value, { exp: second|date });
 *    local.get(key)
 *    local.delete(key)
 *    local.clear()
 *
 * 保存的数据格式 { c: createTime, e: endTime, v: value }
 *    范例:
 *        local.set('a', 1, { exp: 100 })
 *        {"c":1706586155285,"e":1706586255285,"v":"1"}
 * */
import WebStorageCache from 'web-storage-cache';

export const local = new WebStorageCache({ storage: 'localStorage' });

// ttl: 缓存时间, 默认 5 分钟
const DEFAULT_CACHABLE_CONFIG = {
  ttl: 5 * 60,
  // ttl: 10,
  sync: false
}
export const cachable = (name, opt) => {
  const prefix = `cachable-${name}`;
  const { ttl } = { ...DEFAULT_CACHABLE_CONFIG, ...opt };
  return (target) => {
    return async (...args) => {
      const key = `${prefix}:${JSON.stringify(args)}`;
      const cachedData = local.get(key);
      if (cachedData) return cachedData;
      // if (cachedData) return Promise.resolve(cachedData);

      const res = await target(...args);
      local.set(key, res, { exp: ttl });
      return res;
    }
  }
}

local.deleteAllExpires();