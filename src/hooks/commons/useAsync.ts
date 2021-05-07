// libs
import { useState, useCallback } from "react";

type RESULT<RESPONSE> = {
  execute: ({
    data,
    params,
    cbSuccess,
  }: {
    data?: ANY_OBJECT;
    params?: ANY_OBJECT;
    cbSuccess?: (res: RESPONSE) => void;
  }) => any;
  pending: boolean;
  response: Expand<RESPONSE>;
  error: any;
};
/**
 * useAsync
 * @param asyncFunction
 */
export function useAsync<RESPONSE = ANY_OBJECT>(asyncFunction: Function) {
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState<any>({ data: {} });
  const [error, setError] = useState<any>(null);

  const execute = useCallback(
    ({ data, params, cbSuccess }) => {
      setPending(true);
      setResponse({ data: {} });
      setError(null);

      return asyncFunction({
        data,
        params,
      })
        .then((response: any) => {
          setResponse(response.data);
          if (cbSuccess) cbSuccess(response);
        })
        .catch((error: any) => setError(error))
        .finally(() => setPending(false));
    },
    [asyncFunction]
  );

  const result: RESULT<RESPONSE> = { execute, pending, response, error };

  return result;
}
