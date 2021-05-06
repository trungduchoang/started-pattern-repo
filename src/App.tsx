// libs
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
// components
import Main from "./Main";

const App = () => (
  <BrowserRouter>
    <Suspense fallback="Suspense fallback">
      <Main />
    </Suspense>
  </BrowserRouter>
);

export default App;
