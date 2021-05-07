// libs
import { getCookie } from "@/utils/storage";
import { useState, useEffect } from "react";

/**
 * useCookie
 * @description get and manage cookie by useState
 */
export function useCookie(name: string) {
  const [value, setValue] = useState<string | null>(null);

  const cookieValue = getCookie(name);
  useEffect(() => {
    setValue(cookieValue);
  }, [cookieValue]);

  return { value };
}
