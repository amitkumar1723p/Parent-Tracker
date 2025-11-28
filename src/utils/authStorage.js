// src/utils/authStorage.js

import { getToken, removeToken, storeToken } from "./keychainStorage";
import mmkvStorage from "./mmkvstorage";

const USER_KEY = "user";


export const authChangeListeners = [];

export const triggerAuthChanged = () => {
  authChangeListeners.forEach(cb => cb());
};

export const onAuthChanged = (cb) => {
  authChangeListeners.push(cb);
};

// ----------------------------
// 🔐 SAVE AUTH DATA
// ----------------------------
export async function saveAuth(token, user) {
  try {
    await storeToken(token);             // Save token securely
    mmkvStorage.setItem(USER_KEY, user); // Save user fast in MMKV

    triggerAuthChanged(); // 🧠 Notify AppNavigator
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
    console.log("getAuth .................");

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
    await removeToken();                    // remove secure token
    mmkvStorage.removeItem(USER_KEY);       // remove user
    return true;
  } catch (e) {
    console.log("removeAuth error:", e);
    return false;
  }
}




