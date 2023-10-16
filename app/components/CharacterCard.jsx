import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  const getPath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    // <div className="card w-full bg-base-200 shadow-lg">
    //   <figure>
    //     <Image src={getPath} alt={character.name} width={500} height={400} />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{character.name}</h2>
    //     <div className="card-actions justify-end">
    //       <Link href={`character/${character.id}`} className="btn btn-primary">
    //         Details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-sm max-h-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`character/${character.id}`}>
        <div className="relative">
        <Image
          // className="rounded-t-lg"
          src={getPath}
          alt={character.name}
          // width={500}
          // height={500}
          fill={true}
          objectFit="contain"
          />
          </div>
      </Link>
      <div className="p-5">
        <Link href={`character/${character.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-start text-gray-900 dark:text-white">
            {character.name}
          </h5>
        </Link>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
        <div className="flex justify-start mt-5">
        <Link
          href={`character/${character.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
