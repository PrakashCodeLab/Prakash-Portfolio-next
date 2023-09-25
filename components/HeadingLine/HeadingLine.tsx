"use client";

import React from "react";
import Styles from "./Heading.module.scss";
import { headingProps } from "@/types/types";
import {motion} from 'framer-motion';
import { itemOpacity } from "@/constants/animation";
const HeadingLine = ({ heading }: headingProps) => {
  return (
    <motion.div 
    initial="hidden"
    whileInView='show'
    variants={itemOpacity}
    
    className={Styles.line__section}>
      <div className={Styles.line}></div>
      <h2 className={`${Styles.heading} ${Styles.heading__name}`}>{heading}</h2>
    </motion.div>
  );
};

export default HeadingLine;
