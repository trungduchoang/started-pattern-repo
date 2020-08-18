// libs import
import React from "react";
// components import
import PureLoader from "@/components/PureLoader";

const withLoading = isLoading => WrappedComponent =>
  isLoading ? <PureLoader /> : WrappedComponent;

export default withLoading;
