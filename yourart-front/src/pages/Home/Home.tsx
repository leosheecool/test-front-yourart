import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/artwork/0'>Artwork 1</Link>
    </div>
  );
};

export default Home;
