import Image from "next/legacy/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  const getPath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <div className="card w-full bg-base-200 shadow-lg">
      <figure>
        <Image src={getPath} alt={character.name} width={500} height={500} className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-start">{character.name}</h2>
        <div className="card-actions justify-end">
          <Link href={`character/${character.id}`} className="btn capitalize btn-primary btn-sm mt-5">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
