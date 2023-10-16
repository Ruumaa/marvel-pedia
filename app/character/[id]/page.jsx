import React from "react";
import { detailCharacter } from "@/app/utils/api";
import Image from "next/image";

const Details = async ({ params }) => {
  const { id } = params;
  const data = await detailCharacter(id);
  const character = data.results[0];
  const getPath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <div className="py-20">
      <div className="flex bg-base-200 rounded-lg shadow-lg overflow-hidden mx-auto max-w-4xl">
        <div className="w-1/2 bg-cover">
          <Image
            className="w-full"
            alt="Coolest Brand ver!"
            src={`${getPath}`}
            width={300}
            height={300}
          />
        </div>
        <div className="w-1/2 p-3 text-left ">
          <h1 className="text-5xl font-bold mt-5">{character.name}</h1>
          <h3 className="text-xl font-semibold mt-3">Description</h3>
          {character.description ? (
            <p className="text-md font-normal text-justify">{character.description}</p>
          ) : (
            <p className="text-md font-normal text-gray-500">
              {character.name} has no description
            </p>
          )}
          <h3 className="text-xl font-semibold mt-3">Series</h3>
          {character.series.items.slice(0,5).map((serie) => (
            <ul className="list-disc list-inside" key={serie.name}>
              <li className="text-md font-normal">
                {serie.name}
              </li>
            </ul>
          ))}
          {/* <h3 className="text-xl font-semibold mt-3">Comics</h3>
            {character.comics.items.map((comic) => <ul className="list-disc list-inside" key={comic.name}>
              <li className="text-lg font-normal">
                {comic.name}
              </li>
            </ul>)} */}
        </div>
      </div>
    </div>
  );
};

export default Details;
