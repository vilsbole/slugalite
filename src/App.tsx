import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardsView, HomeView } from "./views";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="cards" element={<CardsView />}>
          <Route path=":cardIds" element={<CardsView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
