import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

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
      } catch {
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

  // Optional helpers
  getBoolean: (key) => storage.getBoolean(key),
  getNumber: (key) => storage.getNumber(key),
};

export default mmkvStorage;
