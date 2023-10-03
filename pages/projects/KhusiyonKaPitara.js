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
                    Khushiyon Ka Pitara 
            </h1>

            <video controls width="400" height="200">
                <source src={`/projects/khusiyonkapitara/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="lg:w-10/12 text-gray-600 font-normal text-justify text-sm sm:text-lg p-4">
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
        </div>
            <Footer />
        </main>
    </>
  );
}
