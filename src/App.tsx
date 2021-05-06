// libs
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
// components
import Main from "./Main";

const App = () => (
  <ConfigProvider>
    <BrowserRouter>
      <Suspense fallback="Suspense fallback">
        <Main />
      </Suspense>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
