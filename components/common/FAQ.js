import React, { useState } from 'react';


function FAQ({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
  
    return (
      <>
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="container mx-auto flex flex-col px-2 w-11/12 sm:w-2/3 text-center font-semibold text-lg bg-[#d7db8e] p-3 rounded-lg hover:bg-gray-200 focus:outline-none"
            >
              {item.question}
            </button>
            {activeIndex === index && (
              <div className="container mx-auto flex flex-col px-2 w-11/12 sm:w-2/3 p-3 rounded-lg text-gray-800 text-justify">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </>
    );
  }
  
  export default FAQ;
  