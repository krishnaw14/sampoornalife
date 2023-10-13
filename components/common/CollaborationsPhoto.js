import { createContext } from "react";
import Image from "next/image";

// Photo.js (Photo Component)
const CollaborationPhoto = ({ partner, width, height }) => {
  
    return (
      <div className="flex flex-col items-center">
        <Image
        src={partner.avatar}
        alt=""
        className="flex text-center rounded-lg w-40 h-40 md:w-35 md:h-35 object-cover ring ring-zinc-200"
        height={height}
        width={width}
        />
        <p className="flex text-center font-medium mt-2 text-lg opacity-75">{partner.name}</p>
        <p className="flex text-zinc-500 text text-center">{partner.position}</p>
      </div>
    );
  };
  
  export default CollaborationPhoto;