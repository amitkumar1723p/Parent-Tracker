// src/utils/authStorage.js

import { getToken, removeToken, storeToken } from "./keychainStorage";
import mmkvStorage from "./mmkvstorage";

const USER_KEY = "user";

// ----------------------------
// 🔐 SAVE AUTH DATA
// ----------------------------
export async function saveAuth(token, user) {
  try {
    // Save token in Keychain (secure)
    await storeToken(token);

    // Save user in MMKV (fast)
    mmkvStorage.setItem(USER_KEY, user);

    return true;
  } catch (e) {
    console.log("saveAuth error:", e);
    return false;
  }
}

// ----------------------------
// 🔓 GET AUTH DATA
// ----------------------------
export async function getAuth() {
  try {
    const token = await getToken();
    const user = mmkvStorage.getItem(USER_KEY);

    return { token, user };
  } catch (e) {
    console.log("getAuth error:", e);
    return { token: null, user: null };
  }
}

// ----------------------------
// ❌ REMOVE AUTH DATA (LOGOUT)
// ----------------------------
export async function removeAuth() {
  try {
    await removeToken();
    mmkvStorage.removeItem(USER_KEY);
    return true;
  } catch (e) {
    console.log("removeAuth error:", e);
    return false;
  }
}
