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
                    Send a child to School
            </h1>

            <video controls width="400" height="200">
                <source src={`/projects/sendachildtoschool/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="lg:w-10/12 text-gray-600 font-normal text-justify text-sm sm:text-lg p-4">
            Education is a fundamental right of every child, but unfortunately, many children do not have access to education 
            due to various reasons such as poverty, lack of resources, and social inequalities.
            <br/>
            Not only does education provide children with the knowledge and skills they need to succeed in life, but it also helps 
            break the cycle of poverty and empowers them to become self-sufficient individuals who can achieve their dreams and have a brighter future. 
            So, let&apos;s come together to support these children and make a difference in their lives.
            <br/>
            By contributing to Sampoorna Welfare Foundation, you can help provide these children with access to education and support them in their academic 
            journey. Your support can help:
            <br/>
            <div>
                <ul className="list-disc p-6">
                    <li key="1">Admission and school fee </li>
                    <li key="2">Uniform and textbooks</li>
                    <li key="3">Stationary and other supplies </li>
                </ul>
            </div>
            <br/>
                The costs in this project are variable depending upon the school and class of admission.
            </p>
            <br />
        </div>
            <Footer />
        </main>
    </>
  );
}
