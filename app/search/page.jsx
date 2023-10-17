"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { searchCharacters } from "../utils/api";
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get("query");

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const data = await searchCharacters(querySearch);
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    if (querySearch) { //if querySearch not empty run fetch
      fetch();
    }
  }, [querySearch]);

  return (
    <div className="container mb-10">
      {/* Carousel */}
      <div className="font-bold sm:font-extrabold  text-4xl">
        <h1>Result for "{querySearch}"</h1>
      </div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {characters.length === 0 ? <p className="text-lg font-semibold">"{querySearch}" not found</p> : characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
