import React from "react";
import CollaborationPhoto from "../common/CollaborationsPhoto";

export default function FeaturedIn() {
  const partners = [
    {
      avatar: "/featuredin/navbharat.jpeg",
      name: "",
      position: "",
      desc: "",
    },
    {
        avatar: "/featuredin/dainikbhaskar.png",
        name: "",
        position: "",
        desc: "",
      },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full items-center my-10 md:my-14 py-12" id="featuredin">
      <p className="text-4xl font-bold p-12">We have been featured in</p>

        <div className="w-max-[90vw] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {partners.map((partner, index) => (
            <div
                key={index}
                className="py-10 p-32 sm:p-16 md:p-2 lg:p-2 brightness-90 justify-center items-center"
            >
                <CollaborationPhoto partner={partner} width={1200} height={600} />
            </div>
            ))}
        </div>


    </div>
  );
}