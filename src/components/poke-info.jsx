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
    <div className="flex justify-end bg-gray-900 mx-20 my-10 py-8 px-14 rounded-[20px] ">
      <div
        className="absolute text-white font-bold cursor-pointer"
        onClick={() => handleClick()}
      >
        X
      </div>
      <section className="grid grid-cols-[1fr,2fr] gap-x-16 py-8">
        <PokeImage
          pokeCard={pokeCard}
          spriteUrl={spriteUrl}
          setSpriteUrl={setSpriteUrl}
        />
        <PokeStats pokeCard={pokeCard} />
      </section>
    </div>
  );
}
