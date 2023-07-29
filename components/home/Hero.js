import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Giving wings to children through holistic education <br/>
            <span className="text-blue-700">{" "}to bring impactful change in their lives.{" "}</span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">
          Sampoorna is a registered welfare foundation founded in 2022 under the registeration No. 122202236749.
        We at Sampoorna foundatio convey the power of education and provide holistic development for the underprivileged children through quality teaching and performing extra-classroom activities. 
        We have a strength of 75 underprivileged students for now and thrive ahead to provide wings of learning to more and more children. 
        We currently operate from Raipur and make our best efforts to endeavour collaborations with skilled people who share excellent knowledge and experience for the overall development of our students.
          </p>
        </div>
      </div>
    </div>
  );
}
