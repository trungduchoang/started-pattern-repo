// libs
import { useSelector } from "react-redux";
// types
import { SELECTOR, USE_STORE } from "@/types/common";

const useTypedSelector: SELECTOR = useSelector;

/**
 * useStore - Type and Extract page-reducer by pageName
 */
export const useStore: USE_STORE = (page) =>
  useTypedSelector((state) => state[page]);
