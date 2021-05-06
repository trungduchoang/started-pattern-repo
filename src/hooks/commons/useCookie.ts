// libs
import { getCookie } from "@/utils/common";
import { useState, useEffect } from "react";

/**
 * useCookie
 * @description get cookie
 */
export function useCookie(name: string) {
  const [value, setValue] = useState<string | null>(null);

  const cookieValue = getCookie(name);
  useEffect(() => {
    setValue(cookieValue);
  }, [cookieValue]);

  return { value };
}
