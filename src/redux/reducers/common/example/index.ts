import { TYPES } from "@/redux/actionTypes/common";

type TREDUCER = {};

const initialState: Expand<TREDUCER> = {};

export function example(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER }
) {
  switch (type) {
    case TYPES.EXAMPLE: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
}
