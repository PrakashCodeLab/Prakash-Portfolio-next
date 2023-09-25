"use client";

import React from "react";
import Styles from "./Tech.module.scss";
import Aboutus from "../../components/Aboutus/Aboutus";
import Image from "next/image";
import { technology } from "@/constants/constant";
import {motion} from 'framer-motion';
import { LeftAnimation, RightAnimation, itemOpacity } from "@/constants/animation";
const TechSection = () => {
  return (
    <section id="about" className={Styles.technology__section}>
      <div className={Styles.section__technnology__wrapper}>
        <Aboutus />
        <div className={Styles.tech__known__section}>
          <motion.p 
             initial="hidden"
             whileInView='show'
             variants={itemOpacity}
          className={Styles.tech__lead__known}>
            Here are a few technologies I&apos;ve been working with recently
          </motion.p>

          <div className={Styles.technology__known__section}>
            {technology.map((tech , index) => {
              return (
                <motion.div 
                initial="hidden"
                whileInView='show'
                variants={index % 2 === 0 ? LeftAnimation : RightAnimation}

                key={tech.id} className={Styles.tech__known}>
                  <Image src={tech.icon} width={45} height={45} alt="icon" />

                  <span>{tech.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
