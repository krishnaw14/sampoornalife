import React from "react";

export default function Hero() {
  return (
      <div className="container mx-auto flex flex-col py-12 px-2 w-11/12 sm:w-2/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center item-center text-gray-800 font-black">
            Giving wings to children through holistic education <span className="text-blue-700">to bring impactful change in their lives.</span>
          </h1>
          
          <p className="mt-5 sm:mt-10 text-gray-600 font-normal text-justify text-sm sm:text-lg">
          Sampoorna is a registered welfare foundation founded in 2022 under the Chhattisgarh Society Registration Act, 1973.
          We at Sampoorna foundation convey the power of education and provide holistic development for the underprivileged children through quality teaching and performing extra-classroom activities. 
          We have a strength of 75 underprivileged students for now and thrive ahead to provide wings of learning to more and more children. 
          We currently operate from Raipur and make our best efforts to endeavour collaborations with skilled people who share excellent knowledge and experience for the overall development of our students.
          </p>
      </div>
  );
}
