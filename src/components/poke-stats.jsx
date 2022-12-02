import clsx from "clsx";

export default function PokeStats(props) {
  const { pokeCard } = props;

  return (
    <section className="flex flex-col gap-y-10 items-start rounded-[20px] p-10 w-full bg-gray-500 border-2 border-white">
      <h1 className="text-white font-bold text-3xl self-center">Base Stats</h1>
      <div className="flex flex-col w-full gap-y-5 ">
        {pokeCard?.stats.map((_, k) => (
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
                      "bg-blue-400": pokeCard.stats[k].stat.name === "speed",
                      "bg-red-400": pokeCard.stats[k].stat.name === "attack",
                      "bg-yellow-400":
                        pokeCard.stats[k].stat.name === "special-attack",
                      "bg-green-400": pokeCard.stats[k].stat.name === "defense",
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
  );
}
