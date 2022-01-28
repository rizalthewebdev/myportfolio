import React from "react";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
   return (
      <footer className="relative -mt-16 bottom-0 left-0 right-0 text-gray-900 dark:bg-zinc-900 dark:text-gray-100 border-t border-zinc-700">
         <div className="flex justify-center items-center gap-1 font-thin pt-5">
            <MdOutlineCopyright />
            <span className="font-semibold">2022</span> Khoerul Rizal
         </div>
      </footer>
   );
};

export default Footer;
