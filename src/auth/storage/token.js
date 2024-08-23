import { TOKEN } from "../../utils/constants";

export function setTokenStorage(token) {
  localStorage.setItem(TOKEN, token);
}

export function getTokenStorage() {
  return localStorage.getItem(TOKEN);
}

export function removeTokenStorage() {
  localStorage.removeItem(TOKEN);
}
