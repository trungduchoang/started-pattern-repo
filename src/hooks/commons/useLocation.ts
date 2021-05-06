// hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStore } from "./useStore";
// types
import { TYPES } from "@/redux/actionTypes/common";
// others
import { getDeviceLocation } from "@/utils/common";

/**
 * useLocation
 * @description Get Device Location
 */
export function useLocation() {
  const dispatch = useDispatch();
  const {
    location: { lat, lon, isLoading },
  } = useStore("Common");

  useEffect(() => {
    (() => {
      if (isLoading) return;

      dispatch({
        type: TYPES.GET_LOCATION_LOADING,
      });
      getDeviceLocation({
        onSuccess: ({ lat, lon }) => {
          dispatch({
            type: TYPES.GET_LOCATION_SUCCESS,
            payload: { lat, lon },
          });
        },
        onError: () => {
          dispatch({
            type: TYPES.GET_LOCATION_ERROR,
          });
        },
      });
    })();
  }, []);

  return { lat, lon };
}
