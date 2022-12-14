import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import PokeInfo from "./components/poke-info";
import Roster from "./components/roster";

function App() {
  const total = 905;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Roster total={total} />} />

        <Route path="/pokemon/:id" element={<PokeInfo total={total} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
