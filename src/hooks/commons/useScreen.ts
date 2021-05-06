// libs
import { useState, useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

const DESKTOP_BREAKPOINT = 768;

/**
 * useScreen
 * @description This hook uses useWindowSize internally.
 */
export function useScreen() {
  const { width } = useWindowSize();
  const [isLargeScreen, setLargeScreen] = useState(false);
  const isSmallScreen = !isLargeScreen;

  useEffect(() => {
    const isLargeScreen = width >= DESKTOP_BREAKPOINT;
    setLargeScreen(isLargeScreen);
  }, [width]);

  return { isLargeScreen, isSmallScreen };
}
