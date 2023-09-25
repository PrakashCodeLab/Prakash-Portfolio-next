"use client";

import React from "react";
import Styles from "./Footer.module.scss";
import { itemOpacity } from "@/constants/animation";
import {motion} from 'framer-motion';
const Footer = () => {
  const year = new Date();

  const currentYear = year.getFullYear();

  return (
    <footer className={`${Styles.footer__body__section}`}>
      <div className={Styles.footer__section__wrapper}>
        <motion.h3 
           initial="hidden"
           whileInView='show'
           variants={itemOpacity}
        className={Styles.footer__lead__content}>
          <span className={Styles.footer__copyrights}>&copy;</span>{" "}
          <span className={Styles.footer__yeaar}>{currentYear}</span>{" "}
          <span className={Styles.footer__name}>prakash</span>
        </motion.h3>
      </div>
    </footer>
  );
};

export default Footer;
