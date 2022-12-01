import { useState } from "react";
import { getPokeInfo } from "../services/pokeRequest";
import clsx from "clsx";
import PokeBallCss from "./pokeballcss";

export default function PokeInfo(props) {
  const { setPageState, poke } = props;
  const [pokeCard, setPokeCard] = useState();
  const [spriteUrl, setSpriteUrl] = useState();
  const [tipo, setTipo] = useState("");

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

  function changeSprite(e) {
    const sprite =
      tipo === "shiny"
        ? pokeCard.sprites.other.home.front_default
        : pokeCard.sprites.other.home.front_shiny;

    setSpriteUrl(sprite);
    setTipo(tipo === "shiny" ? "" : "shiny");
  }

  return (
    <div className="flex justify-end bg-gray-900 mx-20 my-10 py-12 px-28 rounded-[20px]">
      <div
        className="absolute text-white font-bold cursor-pointer"
        onClick={() => handleClick()}
      >
        X
      </div>
      <section className="grid grid-cols-[1fr,2fr] gap-x-16 py-12">
        <section className=" bg-gray-500 flex flex-col gap-y-2 justify-center items-center rounded-[20px] p-20">
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
                }
              )}
            >
              {type.type.name}
            </p>
          ))}
        </section>
        <section className="flex flex-col gap-y-10 items-start rounded-[20px] p-10 w-full bg-gray-500 ">
          <h1 className="text-white font-bold text-3xl self-center">
            Base Stats
          </h1>
          <div className="flex flex-col w-full gap-y-5 ">
            {pokeCard?.stats.map((stat, k) => (
              <div
                key={k}
                className="grid grid-cols-[100px,1fr] w-full justify-start gap-x-5 items-center text-white font-bold capitalize"
              >
                <div> {pokeCard.stats[k].stat.name}</div>
                <div className="flex justify-start">
                  <div className="flex w-full items-center h-5 rounded bg-white ">
                    <div
                      style={{
                        width: (pokeCard.stats[k].base_stat / 200) * 100 + "%",
                      }}
                      className={clsx(
                        "flex justify-end items-center px-5 border-px h-5 rounded",
                        {
                          "bg-blue-400":
                            pokeCard.stats[k].stat.name === "speed",
                          "bg-red-400":
                            pokeCard.stats[k].stat.name === "attack",
                          "bg-yellow-400":
                            pokeCard.stats[k].stat.name === "special-attack",
                          "bg-green-400":
                            pokeCard.stats[k].stat.name === "defense",
                          "bg-purple-400":
                            pokeCard.stats[k].stat.name === "special-defense",
                          "bg-gray-400": pokeCard.stats[k].stat.name === "hp",
                        }
                      )}
                    >
                      {pokeCard.stats[k].base_stat + "/300"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
