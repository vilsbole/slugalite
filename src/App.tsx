import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card } from "./components";

function Home() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Link to="/cards">Cards</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
