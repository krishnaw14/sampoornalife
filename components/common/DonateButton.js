import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

const DonateButton = () => {
  return (
    <div className="donate-button bg-blue-500 text-white rounded hover:bg-blue-600">
      <Link href="/#donate">
        <a>Donate Now </a>
      </Link>
     </div>
  );
};

export default DonateButton;