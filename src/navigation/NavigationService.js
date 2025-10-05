

// 📁 NavigationService.js

import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

// -------------------- REGULAR FUNCTIONS --------------------

/**
 * ✅ 1. navigate(name, params)
 *
 * 🔹 Use when: Button press or user action se **navigate** karna hai (screen stack push)
 * 🔹 Example: "Continue" button on Welcome screen → Home screen
 *
 * 🔸 Use Case:
 * onPress={() => navigate('Home')}
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

/**
 * ✅ 2. goBack()
 *
 * 🔹 Use when: User manually back jaa raha (e.g., "Cancel" button or hardware back)
 * 🔹 Example: Edit Profile → Cancel → goBack() → Profile screen
 *
 * 🔸 Use Case:
 * onPress={() => goBack()}
 */
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

/**
 * ✅ 3. replace(name, params)
 *
 * 🔹 Use when: Screen replace karni ho after success action (back na jaa sake)
 * 🔹 Example: Login successful → replace("Home")
 *
 * 🔸 Use Case:
 * const res = await api.login()
 * if (res.success) replace('Home')
 */
export function replace(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

/**
 * ✅ 4. resetAndNavigate(name, params)
 *
 * 🔹 Use when: **Pure navigation stack reset** karni ho, jaise logout, onboarding complete, etc.
 * 🔹 Example: Logout → reset to Login screen
 *
 * 🔸 Use Case:
 * await logout();
 * resetAndNavigate('Login');
 */
export function resetAndNavigate(name, params = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      }),
    );
  }
}

// -------------------- SAFE FUNCTIONS (for async navigation after API / token / app launch) --------------------

/**
 * ✅ 5. safeNavigate(name, params)
 *
 * 🔹 Use when: Navigation call ho raha hai **app start**, **token check**, or **API call ke baad**
 * 🔹 Example: Async login token check ke baad → safeNavigate('Home')
 */
export async function safeNavigate(name, params = {}) {
  await waitUntilReady();
  navigationRef.navigate(name, params);
}

/**
 * ✅ 6. safeGoBack()
 *
 * 🔹 Use when: API error ya confirmation ke baad user ko back bhejna ho
 * 🔹 Example: Profile update fail → alert → safeGoBack()
 */
export async function safeGoBack() {
  await waitUntilReady();
  if (navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

/**
 * ✅ 7. safeReplace(name, params)
 *
 * 🔹 Use when: After token verify or deep linking → replace current screen safely
 * 🔹 Example: Deep link open → safeReplace('PostDetail', { id: 123 })
 */
export async function safeReplace(name, params = {}) {
  await waitUntilReady();
  navigationRef.dispatch(StackActions.replace(name, params));
}

/**
 * ✅ 8. safeReset(name, params)
 *
 * 🔹 Use when: App launch ke baad auth token check hua aur full reset karna ho (protected flow)
 * 🔹 Example: Token found → safeReset('MainApp')
 */
export async function safeReset(name, params = {}) {
  await waitUntilReady();
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    }),
  );
}

/**
 * 🔧 Internal helper for safe functions
 * Ensures navigationRef is ready (required in app launch time)
 */
async function waitUntilReady() {
  const isReady = await new Promise(resolve => {
    const interval = setInterval(() => {
      if (navigationRef.isReady()) {
        clearInterval(interval);
        resolve(true);
      }
    }, 100);
  });
  return isReady;
}
