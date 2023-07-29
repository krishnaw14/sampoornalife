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
                    Birthday Project 
                    <br/>
            </h1>
            <ProjectCarousal imagePath="birthdayproject"/>
            <div className="container mx-auto flex flex-col items-center">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
                    <p className="lg:w-10/12 text-gray-600 font-normal text-sm sm:text-lg">
                    Birthday celebrations are memory makers! Your support means memorable birthday parties and joyful celebrations for the underserved children through our Birthday project.

                    Our Birthday parties involve celebratory environments with:
                        <ul className="list-disc p-6">
                            <li>Birthday cakes and treats </li>
                            <li>Gifts and learning activities </li>
                            <li>Decorations and snacks </li>
                            <li>Theme-based learning sessions and crafts </li>
                            <li>Amazing people, guests and volunteers! </li>
                        </ul>
                        Bring your enthusiasm and come party with us by serving/volunteering at a birthday event. If you&apos;d like to become a Birthday Angel and champion the cause of bringing the joy of heaven to kids
                        facing hardhip, we would love to hear from you!

                        It costs us approximately 2000/rs for an entire celebration. If you wish to contribute, we can further provide you the detailed amount break-ups and our need of the hour. 
                        We have miles to go and your support is the key to MAKE AN IMPACT.
                        Any amount small or big means a lot to us.
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
