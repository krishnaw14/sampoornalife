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
                    Sponsor a Teacher
            </h1>

            <ProjectCarousal imagePath="sponserateacher"/>

            <p className="lg:w-10/12 text-gray-600 font-normal text-sm sm:text-lg p-4">
            In addition to academic support, after-school education programs also provide a safe and nurturing environment for children to learn and grow. 
            These programs can help instil important life skills such as teamwork, leadership, and communication, which can benefit these children throughout their lives.
            <br />
            By contributing to Sampoorna Welfare Foundation to sponsor a teacher for after-school education, you can help provide these children with the resources they need to succeed. 
            Your support can help fund:
                <ul className="list-disc p-6">
                    <li>Tuition fee of the teachers (₹4000/month for a batch of 10 children)</li>
                    <li>Skill development supplies </li>
                </ul>
            Your donation can make a significant impact in the lives of these children by providing them with access to quality education and support. 
            It can help break the cycle of poverty and empower these children to achieve their dreams.
            <br />
            </p>
        </div>
            <Footer />
        </main>
    </>
  );
}
