// libs
import { useEffect, useState } from "react";
// others
import { parseHTML } from "@/utils/common";

/**
 * useLoadHTML
 * @param url - HTML file URL
 */
export function useLoadHTML(url: string) {
  const [html, setHtml] = useState("");
  const result = parseHTML(html);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        setHtml(html);
      });
  }, [url]);

  return { result };
}
