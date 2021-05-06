// libs
import { useEffect, useState } from "react";
import { useDebounceFn } from "./useDebounceFn";

type WindowSize = {
  width: number;
  height: number;
};
/**
 * useWindowSize
 * @description Retrieve window dimensions onResize
 * @see https://usehooks-typescript.com/react-hook/use-window-size
 */
export function useWindowSize(): WindowSize {
  const getWindowSize = () => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    return {
      width: 0,
      height: 0,
    };
  };

  const [windowSize, setWindowSize] = useState<WindowSize | undefined>(
    getWindowSize()
  );

  const { run: updateWindowSize } = useDebounceFn({
    fn: () => {
      setWindowSize(getWindowSize());
    },
  });

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    windowSize || {
      width: 0,
      height: 0,
    }
  );
}
