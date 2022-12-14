import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getPokeInfo } from "../services/pokeRequest";
import PokeImage from "./poke-image";
import PokeStats from "./poke-stats";

export default function PokeInfo(props) {
  const { total } = props;
  const poke = Number(location.pathname.replace("/pokemon/", ""));

  const [pokeCard, setPokeCard] = useState();
  const [spriteUrl, setSpriteUrl] = useState();

  const fetchData = async () => {
    const response = await getPokeInfo(poke, total);
    if (!response) return <Navigate to={"/"} />;

    return (
      setPokeCard(response),
      !spriteUrl && setSpriteUrl(response.sprites.other.home.front_default)
    );
  };

  fetchData();

  return (
    <div className="flex flex-col items-end bg-gray-900 my-10 gap-y-5 pt-5 pb-10 px-2 sm:px-5 sm:mx-10 rounded-[20px]">
      <Link to={"/"}>
        <div className="text-white font-bold bg-gray-500 rounded-full aspect-square w-10 h-10 flex justify-center items-center border-2 border-white">
          X
        </div>
      </Link>
      <div className="flex justify-center self-center">
        <section className="grid gap-y-5 sm:grid-cols-[1fr,2fr] gap-x-16">
          <PokeImage
            pokeCard={pokeCard}
            spriteUrl={spriteUrl}
            setSpriteUrl={setSpriteUrl}
          />
          <PokeStats pokeCard={pokeCard} />
        </section>
      </div>
    </div>
  );
}
