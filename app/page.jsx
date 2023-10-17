import CarouselPage from "./components/Carousel";
import CharacterCard from "./components/CharacterCard";
import { getCharacters } from "./utils/api";

export default async function Home() {
  const characters = await getCharacters();
  return (
    <>
      <div className="container text-center mb-10">
        <div>
          <CarouselPage />
          <div className="font-extrabold text-6xl mt-11 mb-16">
            <h1><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-red-400">Marvel's</span> Character List</h1>
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
