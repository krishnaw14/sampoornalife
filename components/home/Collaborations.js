import React from "react";
import CollaborationPhoto from "../common/CollaborationsPhoto";

export default function Collaborations() {
  const partners = [
    {
      avatar: "/collaborations/cpss.jpeg",
      name: "",
      position: "",
      desc: ""
    },
    {
        avatar: "/collaborations/geniusbrain.jpeg",
        name: "",
        position: "",
        desc: ""
      },
      {
        avatar: "/collaborations/icyspicy.jpg",
        name: "",
        position: "",
        desc: ""
      },
      {
        avatar: "/collaborations/ladiescircle.jpeg",
        name: "",
        position: "",
        desc: ""
      },
      {
        avatar: "/collaborations/letsdonate.jpeg",
        name: "",
        position: "",
        desc: ""
      },
      {
        avatar: "/collaborations/ninjatoddlers.jpeg",
        name: "",
        position: "",
        desc: ""
      },
      {
        avatar: "/collaborations/vachan.jpeg",
        name: "",
        position: "",
        desc: ""
      },
      {
        avatar: "/collaborations/youngindians.jpeg",
        name: "",
        position: "",
        desc: ""
      },
  ];

  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14 py-12" id="collaborations">
      <p className="text-4xl font-bold">Collaborations</p>

      <div className="w-max-[90vw] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 flex justify-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col py-10 p-4 sm:p-4 md:p-2 lg:p-2 brightness-90 rounded-md w-42 sm:w-36 md:w-48 lg:w-48 "
          >
            <CollaborationPhoto partner={partner} width={300} height={300} />
          </div>
        ))}
    </div>


    </div>
  );
}