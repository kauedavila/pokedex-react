import { useState } from "react";
import { getPokeInfo } from "../services/pokeRequest";

export default function CardPoke({ poke, total, variant }) {
  const [pokeCard, setPokeCard] = useState();

  const fetchData = async () => {
    const response = await getPokeInfo(poke, total);
    setPokeCard(response);
  };

  poke !== 0 && fetchData();

  return (
    <div
      className="flex flex-col items-center bg-gray-900 border-2 border-red-500 rounded-[20px]  px-8 w-[150px] h-[150px]
      hover:shadow-lg hover:border-red-300 transition-all duration-300 ease-in-out hover:scale-105
      hover:cursor-pointer hover:bg-gray-800"
    >
      <img
        src={
          variant === "random"
            ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
            : pokeCard?.sprites.front_default
        }
        alt=""
      />
      <div className="flex flex-col justify-center text-center text-white font-bold ">
        <div>{variant !== "random" && `#${pokeCard?.id}`}</div>
        {variant === "random" ? "Random" : `${pokeCard?.name}`}
      </div>
    </div>
  );
}
