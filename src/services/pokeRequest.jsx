export const getPokeList = async (limit, offset) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (e) {}
};

export const getPokeInfo = async (pokid) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokid}`);
    const data = await response.json();
    return data;
  } catch (e) {}
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
