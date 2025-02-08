import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 mt-10">
      <div className="container mx-auto text-center p-4">
        <p className="text-white">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
