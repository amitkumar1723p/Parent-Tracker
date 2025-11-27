import { createMMKV } from "react-native-mmkv";

// MMKV V4 instance
export const storage = createMMKV();

const mmkvStorage = {
  setItem: (key, value) => {
    try {
      const json = typeof value === "string" ? value : JSON.stringify(value);
      storage.set(key, json);
      return true;
    } catch (e) {
      console.error("MMKV setItem error:", e);
      return false;
    }
  },

  getItem: (key) => {
    try {
      const val = storage.getString(key);
      if (!val) return null;

      try {
        return JSON.parse(val);
      } catch (_) {
        return val;
      }
    } catch (e) {
      console.error("MMKV getItem error:", e);
      return null;
    }
  },

  removeItem: (key) => {
    try {
      storage.delete(key);
      return true;
    } catch (e) {
      console.error("MMKV removeItem error:", e);
      return false;
    }
  },

  // Optional helpers (same)
  getBoolean: (key) => storage.getBoolean(key),
  getNumber: (key) => storage.getNumber(key),

  // 👉 NEW: get all keys of MMKV
  getAllKeys: () => {
    try {
      return storage.getAllKeys();
    } catch (e) {
      console.error("MMKV getAllKeys error:", e);
      return [];
    }
  },

  // 👉 NEW: get all stored data in MMKV
  getAllData: () => {
    try {
      const keys = storage.getAllKeys();

      const allData = keys.reduce((acc, key) => {
        const val =
          storage.getString(key) ??
          storage.getBoolean(key) ??
          storage.getNumber(key) ??
          null;

        acc[key] = val;
        return acc;
      }, {});

      return allData;
    } catch (e) {
      console.error("MMKV getAllData error:", e);
      return null;
    }
  },

  // 👉 NEW: MMKV size in bytes
  getSize: () => {
    try {
      return storage.size;
    } catch (e) {
      console.error("MMKV getSize error:", e);
      return 0;
    }
  },
    // 👉 NEW: CLEAR ALL MMKV DATA
  clearAll: () => {
    try {
      storage.clearAll();
      return true;
    } catch (e) {
      console.error("MMKV clearAll error:", e);
      return false;
    }
  },

};

export default mmkvStorage;
