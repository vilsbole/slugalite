import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardsView, HomeView } from "./views";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="cards" element={<CardsView />}>
            <Route path=":cardIds" element={<CardsView />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
