import React from "react";
import ProjectCarousal from "../../components/home/ProjectCarousal";
import ProjectNavbar from "../../components/common/ProjectNavBar";
import Footer from "../../components/common/Footer";

export default function Project() {
  return (
    <>
        <ProjectNavbar />
        <main className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-5">
                    Sponsor a Teacher
                    <br/>
            </h1>
            <ProjectCarousal imagePath="sponserateacher"/>
            <div className="container mx-auto flex flex-col items-center">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
                    <p className="lg:w-10/12 text-gray-600 font-normal text-sm sm:text-lg">
                    In addition to academic support, after-school education programs also provide a safe and nurturing environment for children to learn and grow. 
                    These programs can help instil important life skills such as teamwork, leadership, and communication, which can benefit these children throughout their lives.
                    <br />
                    By contributing to Sampoorna Welfare Foundation to sponsor a teacher for after-school education, you can help provide these children with the resources they need to succeed. 
                    Your support can help fund:
                        <ul className="list-disc p-6">
                            <li>Tuition fee of the teachers (₹4000/month for a batch of 10 children)</li>
                            <li>Skill development supplies </li>
                        </ul>
                    </p>
                    <br />
                    Your donation can make a significant impact in the lives of these children by providing them with access to quality education and support. 
                    It can help break the cycle of poverty and empower these children to achieve their dreams.
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
