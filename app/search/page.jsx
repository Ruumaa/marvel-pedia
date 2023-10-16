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
    <div className="container text-center mb-10">
      <div className="text-bold text-3xl">
        <h1>Search for "{querySearch}"</h1>
      </div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
