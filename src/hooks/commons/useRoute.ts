// libs
import { useRouter } from "next/router";
// types
import { QUERY, ROUTE_PROPS } from "@/types/common";
// others
import { getURLSearchParams, getOriginUrl } from "./tools";
import { parseObjToSearchString } from "@/utils/common";

/**
 * useRoute
 * @description custom NextJS useRouter
 */
export const useRoute = (): ROUTE_PROPS => {
  const nextRouter = useRouter();
  const searchParams = getURLSearchParams();
  const originUrl = getOriginUrl();
  const query = {
    ...(nextRouter.query || {}),
    ...searchParams,
  } as QUERY;

  return {
    ...nextRouter,
    query,
    searchParams,
    originUrl,
  };
};

export { parseObjToSearchString };
