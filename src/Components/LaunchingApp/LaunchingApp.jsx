import React from "react";
import "./launchingApp.css";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import Timer from "../Timer/Timer";

function LaunchingApp() {
  return (
    <div className="launching">
      <motion.h2
        animate={{ y: [-200, 0] }}
        transition={{ type: "spring", stiffness: 400, damping: 80 }}
        className="launchingTitle"
      >
        We’re launching soon
      </motion.h2>
      <motion.img
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        src="images/bg-stars.svg"
        alt="starsPattern"
        className="starsPattern"
      />
      <Timer/>
      <Footer />
    </div>
  );
}

export default LaunchingApp;
