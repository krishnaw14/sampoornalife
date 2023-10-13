import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="">
        <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            <Image src="/header_logo.png" alt="" height={100} width={100} className="h-12 lg:h-14 w-8/12 sm:w-auto self-center object-contain" />
            <div className="my-6 text-base text-color f-f-l mx-4 opacity-60 text-justify">
              <b>Address:</b> C/o G.K. Cars Pvt. Ltd., Gekay Honda, 
              G.E. Road, Telibandha, Raipur (C.G.) 492001<br/><br/>
              <b>Email:</b> mail@sampoorna.life<br/>
              {/* <b>Mobile:</b> +919893343442, +919205772352 */}
            </div>
            <div className="text-sm text-color mb-10 f-f-l self-center">
              <span className="text-sm">
                <a
                  href="https://itsvg.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" sm:text-center sm:text-base transition-all ease-in-out"
                >
                </a>
              </span>
            </div>
            <span className="text-base text-color text-center">
            Follow us:
            </span>

            <div className="container mx-auto">
              <div className="flex justify-center py-2 space-x-8">
                <a href="https://www.instagram.com/sampoorna_life/" target="_blank" rel="noopener noreferrer">
                  <img src="/social-icons/instagram.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="https://www.youtube.com/@SampoornaLifeFoundation" target="_blank" rel="noopener noreferrer">
                  <img src="/social-icons/youtube.png" alt="YouTube" className="w-8 h-8" />
                </a>
                <a href="https://www.facebook.com/p/Sampoorna-life-100083395444144/" target="_blank" rel="noopener noreferrer">
                  <img src="/social-icons/facebook.png" alt="Facebook" className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="py-12">
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
