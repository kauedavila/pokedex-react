import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokeList } from "../services/pokeRequest";
import CardPoke from "./cardpoke";
import { Pagination } from "./pagination";

export default function Roster(props) {
  const { pageState, setPageState, pokeInfo, setPokeInfo } = props;
  const [poke, setPoke] = useState();
  const [offset, setOffset] = useState(0);
  const total = 905;
  const limit = 36;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokeList(limit, offset);
      return setPoke(response);
    };

    fetchData();
  }, [offset]);

  function handleClick(e) {
    setPokeInfo(e === 0 ? Math.floor(Math.random() * total) + 1 : e);
    setPageState("info");
  }

  return (
    <div className="grid justify-items-center shrink-0 my-10 px-6 sm:px-40">
      <div className="flex flex-wrap justify-center sm:justify-start mb-2 sm:mb-10 gap-6 overflow-y-scroll max-h-[525px] sm:max-h-[500px] ">
        {poke?.results.map((_, k) => (
          <Link to={`/pokemon/${k + offset}`}>
            <div className="capitalize cursor-pointer" key={k}>
              {k + offset < 905 && (
                <CardPoke
                  poke={k + offset}
                  pageState={pageState}
                  setPageState={setPageState}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        offset={offset}
        limit={limit}
        setOffset={setOffset}
        total={total}
      />
    </div>
  );
}
