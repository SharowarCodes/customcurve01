import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Product from "./Product";

export default function Curved() {
  return (
    <div className="relative h-[700px] w-full overflow-hidden leading-none bg-[#f87171]">
        <Navbar/>

      {/* Layer 1 - Top Gradient Wave */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full h-[900px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#F78DA7" />
            <stop offset="95%" stopColor="#8ED1FC" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M 0,600 L 0,225 C 76.15574374079529,243.09057437407952 152.31148748159058,261.18114874815905 205,284 C 257.6885125184094,306.81885125184095 286.909793814433,334.3659793814433 334,324 C 381.090206185567,313.6340206185567 446.0493372606775,265.35493372606777 519,267 C 591.9506627393225,268.64506627393223 672.8928571428571,320.21428571428567 726,332 C 779.1071428571429,343.78571428571433 804.3792341678941,315.78792341678945 868,277 C 931.6207658321059,238.21207658321057 1033.590206185567,188.6340206185567 1096,201 C 1158.409793814433,213.3659793814433 1181.2599410898379,287.6759941089838 1232,302 C 1282.7400589101621,316.3240058910162 1361.370029455081,270.6620029455081 1440,225 L 1440,600 L 0,600 Z"
        />
      </motion.svg>

      {/* Layer 2 - Floating Middle Wave */}
      {/* <motion.svg
        className="absolute bottom-0 w-full h-[750px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="#f87171"
          fillOpacity="1"
          d="M0,240C60,230,120,200,240,190C360,180,480,200,600,190C720,180,840,140,960,160C1080,180,1200,240,1320,250C1440,260,1440,320,1440,320L0,320Z"
        />
      </motion.svg> */}

      {/* Layer 3 - Static Deep Red Wave */}
      <motion.svg
        className="absolute bottom-0 w-full "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#e11d48"
          fillOpacity="1"
          d="M0,200C80,210,160,220,240,210C320,200,400,180,480,170C560,160,640,160,720,170C800,180,880,200,960,210C1040,220,1120,220,1200,230C1280,240,1360,260,1440,270L1440,320L0,320Z"
        />
      </motion.svg>
      {/* Product component below last wave */}
      <div className="relative z-10 pt-[240px]"> {/* Push down so it doesn’t overlap */}
        <Product />
      </div>
    </div>
  );
}
