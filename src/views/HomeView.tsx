import React from "react";
import { Link } from "react-router-dom";

export const HomeView = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <Link to="/cards/marco-verratti-2021-unique-1">Single Card</Link>
      </div>
      <div>
        <Link to="/cards/marco-verratti-2021-unique-1,marco-verratti-2021-rare-1">
          Multiple Cards
        </Link>
      </div>
    </div>
  );
};
