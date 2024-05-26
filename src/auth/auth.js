import { reactive } from 'vue';

export const authState = reactive({
  isAuthenticated: false,
});

export function login() {
  authState.isAuthenticated = true;
}

export function logout() {
  authState.isAuthenticated = false;
}