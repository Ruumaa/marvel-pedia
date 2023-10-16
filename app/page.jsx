import CharacterCard from "./components/CharacterCard";
import { getCharacters } from "./utils/api";

export default async function Home() {
  const characters = await getCharacters();
  return (
    <>
      <div className="container text-center mb-10">
        <div className="container text-center">
          <div className="text-bold text-5xl">
            <h1>Marvel's Characters List</h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {characters.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
