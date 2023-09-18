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
                    Send a child to School
                    <br/>
            </h1>
            {/* <ProjectCarousal imagePath="sendachildtoschool"/> */}
            <div className="container mx-auto flex flex-col items-center p-4">
            <video controls width="400" height="200">
                <source src={`/projects/sendachildtoschool/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className="container mx-auto flex flex-col items-center">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
                    <p className="lg:w-10/12 text-gray-600 font-normal text-sm sm:text-lg">
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
                        <ul className="list-disc p-6">
                            <li>Admission and school fee </li>
                            <li>Uniform and textbooks</li>
                            <li>Stationary and other supplies </li>
                        </ul>
                    <br/>
                        The costs in this project are variable depending upon the school and class of admission.
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
