import md5 from "md5";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = "d477134e64d299f74378bcd93f3d1ebf";
const API_PRIVATE_KEY = "cb2240e7b8816c6539220353914e33eb4735d794";

const getTimeStamp = () => Date.now().toString();
const timeStamp = getTimeStamp;
const getHash = (timeStamp) =>
  md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
const hash = getHash(timeStamp);

const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.data;
};

export const getCharacters = async () => {
  const url = `${API_BASE_URL}/characters?${query}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const detailCharacter = async (characterId) => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`;
  const response = await fetch(url);
  return handleResponse(response);
}
export const searchCharacters = async (querySearch) => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`;
  const response = await fetch(url);
  return handleResponse(response);
}