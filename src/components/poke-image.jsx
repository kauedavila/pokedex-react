import clsx from "clsx";
import { useState } from "react";
import PokeBallCss from "./pokeballcss";

export default function PokeImage(props) {
  const { pokeCard, spriteUrl, setSpriteUrl } = props;
  const [tipo, setTipo] = useState("");

  function changeSprite(e) {
    const sprite =
      tipo === "shiny"
        ? pokeCard.sprites.other.home.front_default
        : pokeCard.sprites.other.home.front_shiny;

    setSpriteUrl(sprite);
    setTipo(tipo === "shiny" ? "" : "shiny");
  }

  return (
    <section className=" bg-gray-500 border-2 border-white flex  gap-y-2 justify-center items-center rounded-[20px] p-20">
      <div></div>
      <div>
        <section className="flex flex-col">
          <PokeBallCss />
          <img
            src={spriteUrl}
            alt=""
            className="absolute self-center cursor-pointer"
            width={150}
            height={150}
            onClick={(e) => changeSprite(e)}
          />
        </section>
        <p className="text-center text-xl text-white font-bold capitalize mb-5">
          {pokeCard?.name}
        </p>
        {pokeCard?.types.map((type, k) => (
          <p
            key={k}
            className={clsx(
              "text-center text-white text-sm font-bold capitalize rounded-xl py-px w-full",
              {
                "bg-blue-400": type.type.name === "water",
                "bg-red-400": type.type.name === "fire",
                "bg-yellow-400": type.type.name === "electric",
                "bg-green-400": type.type.name === "grass",
                "bg-purple-400": type.type.name === "poison",
                "bg-gray-400": type.type.name === "normal",
                "bg-pink-400": type.type.name === "fairy",
                "bg-indigo-400": type.type.name === "bug",
                "bg-blue-200": type.type.name === "flying",
                "bg-yellow-700": type.type.name === "ground",
                "bg-gray-700": type.type.name === "rock",
                "bg-gray-200": type.type.name === "psychic",
                "bg-gray-800": type.type.name === "ghost",
                "bg-yellow-200": type.type.name === "ice",
                "bg-red-700": type.type.name === "fighting",
                "bg-red-200": type.type.name === "dragon",
                "bg-green-200": type.type.name === "dark",
                "bg-green-700": type.type.name === "steel",
              }
            )}
          >
            {type.type.name}
          </p>
        ))}
      </div>
    </section>
  );
}
