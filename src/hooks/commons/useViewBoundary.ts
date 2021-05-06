// libs
import { useState, useEffect } from "react";

type PROPS = {
  elementId: string;
  defaultValue?: boolean;
};
/**
 * useViewBoundary
 * @description Check is Element in view port by element id
 * @param elementId
 * @param defaultValue
 */
export const useViewBoundary = ({ elementId, defaultValue = true }: PROPS) => {
  const [isOnViewPort, setIsOnViewPort] = useState(defaultValue);

  useEffect(() => {
    const watchElement = () => {
      const elment = document.getElementById(elementId);
      if (!elment) return;
      const { top, bottom } = elment.getBoundingClientRect();
      setIsOnViewPort(bottom >= 0 && top <= window.innerHeight);
    };

    window.addEventListener("scroll", watchElement);

    return () => {
      window.removeEventListener("scroll", watchElement);
    };
  }, [elementId]);

  return { isOnViewPort };
};
