import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "https://pokeapi.co/api/v2/";

export const getPokeList = async (limit, offset) => {
  try {
    const response = await fetch(
      `${baseUrl}pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (e) {}
};

export const getPokeInfo = async (pokid, total) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (pokid > total) {
      navigate("/");
    }
  }, [pokid]);

  try {
    const response = await fetch(`${baseUrl}/pokemon/${pokid}`);
    const data = await response.json();
    return data;
  } catch (e) {}
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
