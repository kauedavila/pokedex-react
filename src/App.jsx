import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import PokeInfo from "./components/poke-info";
import Roster from "./components/roster";

function App() {
  const [pageState, setPageState] = useState("");
  const [pokeInfo, setPokeInfo] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      {pageState === "" && (
        <Roster
          pageState={pageState}
          setPageState={setPageState}
          pokeInfo={pokeInfo}
          setPokeInfo={setPokeInfo}
        />
      )}

      {pageState === "info" && (
        <PokeInfo
          poke={pokeInfo}
          pageState={pageState}
          setPageState={setPageState}
        />
      )}
    </div>
  );
}

export default App;
