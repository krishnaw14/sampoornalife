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
                    Summer School
            </h1>
            <video controls width="400" height="200">
                <source src={`/projects/summerschool/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="lg:w-10/12 text-gray-600 font-normal text-justify text-sm sm:text-lg p-4">
            In 2023, we unveiled the first ever summer camp Sampoorna hosted. This summer school was dedicated towards creative breakthroughs and a break from all the textbook learning.
                The summer school was home to classes and workshops like : 
            <ul className="list-disc p-6">
                <li>Origami</li>
                <li>Fireless cooking</li>
                <li>Vedic Chanting</li>
                <li>Communications</li>
                <li>Mandala art and many more.</li>
            </ul>
            We are creating a space for such creative for such creative brainstorming every Saturday. You can come be a part of it as a teacher or a volunteer. 
            </p>
        </div>
            <Footer />
        </main>
    </>
  );
}
