// libs
import { useState } from "react";
// others
import "./style.scss";

const Home = () => {
  const [i, setI] = useState(0);

  return (
    <button type="button" onClick={() => setI((i) => i + 1)}>
      Count now: {i}
    </button>
  );
};

export default Home;
