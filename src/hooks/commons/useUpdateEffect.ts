// libs import
import { useEffect, useRef } from "react";

/**
 * useUpdateEffect
 * @description Trigger Effect but ignore first Mount
 * @param effect
 * @param deps
 */
export const useUpdateEffect = (
  effect: Function = () => {},
  deps: Array<any> = []
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      effect();
    }
  }, deps);
};
