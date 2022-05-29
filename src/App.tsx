import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, Cards } from "./components";

function Home() {
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cards" element={<Cards />}>
          <Route path=":cardIds" element={<Cards />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
