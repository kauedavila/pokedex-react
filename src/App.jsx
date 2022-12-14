import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import PokeInfo from "./components/poke-info";
import Roster from "./components/roster";

function App() {
  const [pageState, setPageState] = useState("");
  const [pokeInfo, setPokeInfo] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Roster
              pageState={pageState}
              setPageState={setPageState}
              pokeInfo={pokeInfo}
              setPokeInfo={setPokeInfo}
            />
          }
        />

        <Route
          path="/pokemon/:id"
          element={
            <PokeInfo
              poke={pokeInfo}
              pageState={pageState}
              setPageState={setPageState}
            />
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
