const AUTH_KEY = "sa_user";

export interface AuthUser {
  email: string;
  name?: string;
}

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) !== null;
}

export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function signIn(user: AuthUser) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export function signOut() {
  localStorage.removeItem(AUTH_KEY);
}
