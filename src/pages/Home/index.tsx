// libs
import React from "react";
// others
import "./style.scss";
import { Link } from "react-router-dom";

/**
 * Home
 * TODO: Create homePage
 */
const Home = () => (
  <div className="home-wrapper">
    <Link to="/sample">Go to sample</Link>
  </div>
);

export default Home;
