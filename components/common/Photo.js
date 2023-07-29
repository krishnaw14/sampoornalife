import { createContext } from "react";
import Image from "next/image";

// Photo.js (Photo Component)
const Photo = ({ person, onClick }) => {
    const handleClick = () => {
      onClick(person);
    };
  
    return (
      <div className="flex flex-col items-center">
        <Image
        src={person.avatar}
        alt=""
        className="flex justify-center rounded-lg w-40 h-40 md:w-35 md:h-35 object-cover ring ring-zinc-200"
        onClick={handleClick}
        height={200}
        width={200}
        />
        <p className="flex justify-center font-medium mt-2 text-lg opacity-75">{person.name}</p>
        <p className="flex justify-center text-zinc-500 text">{person.position}</p>
      </div>
    );
  };
  
  export default Photo;