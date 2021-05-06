/**
 * setCookie
 * @description add new cookie item
 * @param name
 * @param value
 * @param days
 * @param path
 * @param domain
 */
export function setCookie({
  name,
  value,
  days,
  path = "/",
  domain,
}: {
  name: string;
  value: string | number | boolean;
  days?: number;
  path?: string;
  domain?: string;
}) {
  let expires = "";
  let cookie = `${name}=${value || ""}${expires}; path=${path}`;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  if (domain) {
    cookie += `; domain=${domain}`;
  }
  document.cookie = cookie;
}

/**
 * getCookie
 * @description det cookie by name
 * @param name
 */
export function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

/**
 * removeCookie
 * @description delete cookie by name
 * @param name
 */
export function removeCookie(name: string, domain?: string) {
  document.cookie = `${name}=1; path=/;${
    domain ? ` Domain=${domain};` : ""
  } expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

/**
 * setSessionStorage
 * @param data
 * @param key
 */
export function setSessionStorage(key: string, data: string) {
  if (typeof window === "undefined") {
    return;
  }
  sessionStorage.setItem(key, JSON.stringify(data));
}

/**
 *
 * @param key
 */
export function removeSessionStorage(key: string) {
  if (typeof window === "undefined") {
    return;
  }
  sessionStorage.removeItem(key);
}

/**
 * getSessionStorage
 * @param key
 */
export function getSessionStorage(key: string) {
  if (typeof window === "undefined") {
    return "";
  }
  const item = sessionStorage.getItem(key);

  if (!item) {
    return "";
  }

  // Due to ZMap libs auto add "" to sessionStorage data
  return item.replace(/"/g, "");
}

/**
 * parseJWT
 * @description parse token (string) -> Object
 * @param token
 */
export function parseJWT(token: string | null) {
  if (!token) return null;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  try {
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

/**
 * normalize - Normalize Array
 * @description Normalize first nested of [Object, ...]
 * @param input - Array Input
 * @param key - item Object key
 */
export function normalize(input: ANY_OBJECT[], key: string) {
  return input.reduce(
    ({ result: accResult, keys: accKeys }, current) => {
      const _key = current[key];

      return {
        result: { ...accResult, [_key]: current },
        keys: [...accKeys, `${_key}`],
      };
    },
    { result: {}, keys: [] }
  ) as { result: ANY_OBJECT; keys: string[] };
}

/**
 * addComma
 * @description Convert 12345678... -> 12, 345, 678...
 * @param num
 */
export const addComma = (num: number | string) =>
  `${num ?? ""}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

/**
 * setLocalStorage
 * @param data
 * @param key
 */
export function setLocalStorage(key: string, data: string) {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * getLocalStorage
 * @param key
 */
export function getLocalStorage(key: string) {
  if (typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
}

/**
 * eraseLocalStorage
 * @param key
 */
export function eraseLocalStorage(key: string) {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(key);
}

/**
 * getDeviceLocation
 * @param onSuccess
 * @param onError
 */
export const getDeviceLocation = ({
  onSuccess,
  onError,
}: {
  onSuccess: ({ lat, lon }: { lat: string; lon: string }) => void;
  onError: () => void;
}) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude: lat, longitude: lon } }: ANY_OBJECT) => {
      onSuccess({ lat, lon });
    },
    () => {
      onError();
    }
  );
};

/**
 * convert object to a query string
 * parseObjToQueryString
 */
export const parseObjToSearchString = (params: ANY_OBJECT) => {
  let paramsString = "";
  const paramKeys = Object.keys(params);
  paramKeys.forEach((key) => {
    const value = params[key];
    if ((!key || !value) && value !== 0) return;
    paramsString += `${key}=${value}&`;
  });

  return `?${paramsString.slice(0, paramsString.length - 1)}`;
};

/**
 * clearUrlSearch
 * @description Clear Url Search Params without DOM effects
 */
export const clearUrlSearch = () => {
  window.history.replaceState({}, "", window.location.pathname);
};
