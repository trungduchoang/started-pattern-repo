// types
import { ROOT_STATE, PAGES_REDUCER } from "@/configs/Redux";

export type SELECTOR = {
  <TSelected>(
    selector: (state: ROOT_STATE) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
};

export type USE_STORE = <PAGE extends PAGES_REDUCER>(
  page: PAGE
) => ROOT_STATE[PAGE];
