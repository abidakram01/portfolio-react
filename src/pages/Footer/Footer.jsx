import React from "react";
import { FaGithub, FaBehance, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none w-full border-t-2 border-gradient">
            <div className="w-full px-10 py-6 flex flex-col md:flex-row items-center justify-between bg-gray-900/95 backdrop-blur-md">
                <p className="text-gray-300 text-1xl text-center md:text-left">
                    &copy; Handcrafted with ♥ by © Abid Akram.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://www.linkedin.com/in/abidakram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/abidakram01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                        <FaGithub />
                    </a>
                    <a href="https://www.behance.net/abidakram01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                        <FaBehance />
                    </a>
                    <a href="mailto:abid.akram01@email.com" className="text-gray-400 hover:text-white text-2xl">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <style>{`
                .border-gradient {
                border-top: 2px solid;
                border-image-source: linear-gradient(to right, #34d399, #06b6d4, #6366f1);
                border-image-slice: 1;
                }
            `}</style>
        </footer>


    );
}