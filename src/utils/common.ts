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
