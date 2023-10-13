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
                        Birthday Project 
                </h1>

                <video controls width="400" height="200">
                    <source src={`/projects/birthdayproject/video.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <p className="lg:w-10/12 text-gray-600 font-normal text-justify text-sm sm:text-lg p-4">
                Birthday celebrations are memory makers! Your support means memorable birthday parties and joyful celebrations for the underserved 
                children through our Birthday project.

                Our Birthday parties involve celebratory environments with:
                <div>
                    <ul className="list-disc p-6">
                        <li key="1">Birthday cakes and treats </li>
                        <li key="2">Gifts and learning activities </li>
                        <li key="3">Decorations and snacks </li>
                        <li key="4">Theme-based learning sessions and crafts </li>
                        <li key="5">Amazing people, guests and volunteers! </li>
                    </ul>
                </div>
                    Bring your enthusiasm and come party with us by serving/volunteering at a birthday event. If you&apos;d like to become a Birthday Angel 
                    and champion the cause of bringing the joy of heaven to kids facing hardhip, we would love to hear from you!

                    It costs us approximately 2000/rs for an entire celebration. If you wish to contribute, we can further provide you the detailed amount 
                    break-ups and our need of the hour. We have miles to go and your support is the key to MAKE AN IMPACT. Any amount small or big means 
                    a lot to us.
                </p>
                <br />
            </div>
            <Footer />
        </main>
    </>
  );
}
