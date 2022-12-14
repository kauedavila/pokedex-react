import { useState } from "react";
import { getPokeInfo } from "../services/pokeRequest";
import clsx from "clsx";
import PokeImage from "./poke-image";
import PokeStats from "./poke-stats";

export default function PokeInfo(props) {
  const { setPageState, poke } = props;
  const [pokeCard, setPokeCard] = useState();
  const [spriteUrl, setSpriteUrl] = useState();

  const fetchData = async () => {
    const response = await getPokeInfo(poke);
    return (
      setPokeCard(response),
      !spriteUrl && setSpriteUrl(response.sprites.other.home.front_default)
    );
  };

  fetchData();

  function handleClick() {
    setPageState("");
  }

  return (
    <div className="flex flex-col items-end bg-gray-900 my-10 gap-y-5 pt-5 pb-5 px-2 sm:px-5 sm:mx-10 rounded-[20px]">
      <div
        className="text-white font-bold cursor-pointer bg-gray-500 rounded-full aspect-square w-10 h-10 flex justify-center items-center border-2 border-white"
        onClick={() => handleClick()}
      >
        X
      </div>
      <div className="flex justify-center">
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
