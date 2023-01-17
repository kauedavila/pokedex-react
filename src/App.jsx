import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import PokeInfo from "./pages/poke-info";
import Roster from "./pages/roster";

function App() {
  const total = 905;
  const [poke, setPoke] = useState();
  const [offset, setOffset] = useState(0);
  const limit = 35;

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Roster
              total={total}
              poke={poke}
              setPoke={setPoke}
              offset={offset}
              setOffset={setOffset}
              limit={limit}
            />
          }
        />

        <Route path="/pokemon/:id" element={<PokeInfo total={total} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
