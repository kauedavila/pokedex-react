import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getPokeList } from "../services/pokeRequest";
import CardPoke from "../components/cardpoke";
import { Pagination } from "../components/pagination";

export default function Roster(props) {
  const { total, limit, poke, setPoke, offset, setOffset } = props;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokeList(limit, offset);
      setPoke(response);
    };

    fetchData();
  }, [offset]);

  return (
    <div className="grid justify-items-center shrink-0 my-10 px-6 sm:px-40">
      <div
        className="flex flex-wrap justify-center sm:justify-start mb-2 sm:mb-10 gap-6 overflow-y-scroll max-h-[525px] sm:max-h-[500px]
       "
      >
        {poke?.results.map((_, k) => (
          <Link key={k} to={`/pokemon/${k + offset + 1}`}>
            <div className="capitalize cursor-pointer">
              <CardPoke poke={k + offset + 1} total={total} />
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
