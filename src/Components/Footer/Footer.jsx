import React from "react";
import "./footer.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      animate={{ y: [200, 0] }}
      transition={{ type: "spring", stiffness: 400, damping: 80 }}
      className="footer"
    >
      <img
        src="images/pattern-hills.svg"
        alt="footerPattern"
        className="footerPattern"
      />
      <div className="footerLink">
        <motion.img
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          src="images/icon-facebook.svg"
          alt="facebookIcon"
          className="footerLinkItem"
        />
        <motion.img
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          src="images/icon-pinterest.svg"
          alt="PinterestIcon"
          className="footerLinkItem"
        />
        <motion.img
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          src="images/icon-instagram.svg"
          alt="InstagramIcon"
          className="footerLinkItem"
        />
      </div>
    </motion.div>
  );
}

export default Footer;
