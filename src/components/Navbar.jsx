import React from "react";
import { motion } from "framer-motion";
import Container from "./Container"; // adjust path if needed

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 rounded-b-[30px] shadow-lg backdrop-blur-lg bg-[#f87171]/90">
      <Container>
        <div className="w-full flex justify-between items-center  px-2 py-4 text-white">
          {/* Logo */}
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 30, delay: 0.5 }}
          >
            <h1 className="text-4xl  font-thin">WineX</h1>
          </motion.div>

          {/* Nav List */}
          <motion.ul
            className="flex space-x-8 text-lg font-medium"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.5 }}
          >
            <li className="hover:underline cursor-pointer">Buy</li>
            
            
            <li className="hover:underline cursor-pointer">Contact</li>
          </motion.ul>

          {/* Buttons */}
          <motion.div
            className="flex space-x-4"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 30, delay: 0.5 }}
          >
            <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-[#f87171] transition duration-300 shadow-md">
              Login
            </button>
            <button className="px-4 py-2 bg-transparent text-white rounded hover:bg-gray-300 transition duration-300 shadow-md">
              Signup
            </button>
          </motion.div>
        </div>
      </Container>
    </nav>
  );
}
