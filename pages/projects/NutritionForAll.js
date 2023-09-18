import React from "react";
import ProjectCarousal from "../../components/home/ProjectCarousal";
import ProjectNavbar from "../../components/common/ProjectNavBar";
import Footer from "../../components/common/Footer";

export default function Project() {
  return (
    <>
        <ProjectNavbar />
        <main className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-5 p-4">
                    Nutrition For All 
                    <br/>
            </h1>
            {/* <ProjectCarousal imagePath="nutritionforall"/> */}
            <div className="container mx-auto flex flex-col items-center p-4">
            <video controls width="400" height="200">
                <source src={`/projects/nutritionforall/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
                    <p className="lg:w-10/12 text-gray-600 font-normal text-sm sm:text-lg">
                    Every child deserves a bright and promising future, and together, we can help ensure that by fulfilling their nutritional needs. 
                    The sad reality is that many of these children lack access to regular nutritious meals, which are essential for their physical and cognitive development. 
                    This situation not only compromises their health but also hampers their ability to learn, play, and grow into thriving individuals.
                    <br />
                    We at Sampoorna Welfare Foundation have dedicated ourselves to making a difference by providing sustainable solutions to address these issues and uplift the lives of children. 
                    We are currently running a &quot;one fruit a day&quot; drive to ensure daily nutrition dose for all. 
                    <br />
                    Your kind contribution will go towards making healthier lives of many through:

                        <ul className="list-disc p-6">
                            <li>Medical camps and required tests </li>
                            <li>Medicines and follow-ups </li>
                            <li>Nutritional supplements</li>
                            <li>Workshops on mental health, sanitation, etc</li>
                        </ul>
                    </p>
                    <br /> 
                    {/* <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12 flex flex-col justify-center items-center px-4">
                        <a href="/#donate"
                            className="flex justify-center items-center p-3 px-6 w-max bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all ease-in-out duration-100 sm:scale-100 m-1.5"
                            target=""
                            rel="noopener noreferrer"
                            >
                            Donate now!
                        </a>
                    </div> */}
                </div> 
            </div>
            <Footer />
        </main>
    </>
  );
}
