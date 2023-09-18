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
                    Khushiyon Ka Pitara 
                    <br/>
            </h1>
            {/* <ProjectCarousal imagePath="khusiyonkapitara"/> */}
            <div className="container mx-auto flex flex-col items-center p-4">
            <video controls width="400" height="200">
                <source src={`/projects/khusiyonkapitara/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className="container mx-auto flex flex-col items-center">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
                    <p className="lg:w-10/12 text-gray-600 font-normal text-sm sm:text-lg">
                    &quot;Khushiyon Ka Pitara&quot; is our major fundraising carnival which has major attractions such as:
                        <ul className="list-disc p-6">
                            <li>Cultural program by our talented students representing the cultures of India </li>
                            <li>Fun fair (games) and Food stalls </li>
                            <li>Art Exhibit and Sale (Artworks made by our brilliant gifted students)</li>
                        </ul>
                        Donations accepted for the event and for the mission of the foundation as well. 
                        Join our Volunteer team and support our mission
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
