import React from "react";
import ProjectCarousal from "../../components/home/ProjectCarousal";
import ProjectNavbar from "../../components/common/ProjectNavBar";
import Footer from "../../components/common/Footer";

export default function Project() {
  return (
    <>
        <ProjectNavbar />
        <main className="">
        <div className="container mx-auto flex flex-col px-2 w-11/12 sm:w-2/3 items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black text-center p-4">
                    Nutrition For All 
            </h1>

            <video controls width="400" height="200">
                <source src={`/projects/nutritionforall/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <p className="lg:w-10/12 text-gray-600 font-normal text-justify text-sm sm:text-lg p-4">
            Every child deserves a bright and promising future, and together, we can help ensure that by fulfilling their nutritional needs. 
            The sad reality is that many of these children lack access to regular nutritious meals, which are essential for their physical and cognitive development. 
            This situation not only compromises their health but also hampers their ability to learn, play, and grow into thriving individuals.
            <br />
            We at Sampoorna Welfare Foundation have dedicated ourselves to making a difference by providing sustainable solutions to address these issues and uplift the lives of children. 
            We are currently running a &quot;one fruit a day&quot; drive to ensure daily nutrition dose for all. 
            <br />
            Your kind contribution will go towards making healthier lives of many through:

            <div>
                <ul className="list-disc p-6">
                    <li key="1">Medical camps and required tests </li>
                    <li key="2">Medicines and follow-ups </li>
                    <li key="3">Nutritional supplements</li>
                    <li key="4">Workshops on mental health, sanitation, etc</li>
                </ul>
            </div>
            </p>
            <br /> 
        </div>
            <Footer />
        </main>
    </>
  );
}
