import { useState } from "react";
import { getPokeInfo } from "../services/pokeRequest";

export default function CardPoke({ poke }) {
  const [pokeCard, setPokeCard] = useState();

  const fetchData = async () => {
    const response = await getPokeInfo(poke);
    return setPokeCard(response);
  };

  fetchData();

  return (
    <div className="flex flex-col items-center bg-gray-900 border-2 border-red-500 rounded-[20px]  px-8 w-[150px] h-[150px]">
      <img
        src={
          poke === 0
            ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
            : pokeCard?.sprites.front_default
        }
        alt=""
      />
      <p className="flex flex-col justify-center text-center text-white font-bold ">
        <div>{poke !== 0 && `#${pokeCard?.id}`}</div>
        {poke === 0 ? "Random" : `${pokeCard?.name}`}
      </p>
    </div>
  );
}
