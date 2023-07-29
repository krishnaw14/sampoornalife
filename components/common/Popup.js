import { useEffect, useRef } from 'react';

// Popup.js (Popup Component)
const Popup = ({ person, onClose }) => {
    const popupRef = useRef(null);

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 sm:max-w-md" ref={popupRef}>
          <h2 className="text-lg font-semibold">{person.name}</h2>
          <p className="mt-2">{person.desc}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Popup;
  