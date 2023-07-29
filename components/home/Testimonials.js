import React from "react";
import Image from 'next/image'

export default function Testimonials() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
          Testimonials
          </h1>
          <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
            Here is why you should trust us
          </p>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/3">
            <div className="bg-white border rounded-md border-gray-50 relative sm:p-10 p-6">
              <div>
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
              A big congratulations to you guys for doing this. 
              Hoping that Sampoorna reaches and lights up the lives of millions. Always here to help! 
              </p>
            </div>
            <div className="flex items-center mt-7">
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                Priya Gupta
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                Founder, Parkshala
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-50 relative sm:p-10 p-6">
              <div>
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
              Thank you so much for this grateful experience. I felt great that because of you, our campus could be part of a small act of kindness and generosity. 
              It feels great to be associated with you and the team, looking forward to more such experiences.
             
              </p>
            </div>
            <div className="flex items-center mt-7">
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                Priyank Patel
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                Owner, Nukkad Tea Cafe
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-50 relative sm:p-10 p-6">
              <div>
                <Image
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
              Dear Hemangi and Neha, We really appreciate your hard work and enthusiasm toward these social challenges. Keep up the good work!
              </p>
            </div>
            <div className="flex items-center mt-7">
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                Sunil Dogar Ji
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                President, Punjabi Sanatan Samaj
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
