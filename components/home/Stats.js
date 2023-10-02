import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Stats() {
  const [statistics, setStatistics] = useState(null);
  useEffect(() => {
    axios.get("https://teamhnm.org/api").then((res, err) => {
      setStatistics(res.data.data);
    });
  }, [statistics !== null]);
  return (
    <div id="stats">
      <div className="pb-20">
        <div className="mx-auto bg-gradient-to-l from-blue-400 to-blue-700 h-96">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex text-center">
              <div className="mt-10">
                <h2 className="lg:text-6xl md:text-5xl text-4xl font-black text-white px-4">
                  Our Journey so far
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-40 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {/* {statistics !== null && statistics[0][0]}+ */}
                80+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Children reached
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {/* {statistics !== null && statistics[1][0]}+ */}
                35+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Volunteers
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {/* ₹{statistics !== null && statistics[2][0]}+ */}
                9+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Teachers
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {/* {statistics !== null && statistics[3][0]}+ */}
                ₹5L+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
              Donation collected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
