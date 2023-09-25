"use client";

import React from 'react';
import Styles from './About.module.scss';
import { HeadingLine } from '../components';
import {motion} from 'framer-motion';
import { upAnimation } from '@/constants/animation';
const Aboutus = () => {
  return (
    <div className={Styles.technology__aboutme__section}>
      <h2  className={Styles.about__heading}>
        <HeadingLine heading="About Me" />
      </h2>

      <motion.p 
       initial="hidden"
       whileInView='show'
       variants={upAnimation}

      className={Styles.aboutme__lead}>
        Get to know me
      </motion.p>
      <motion.p 
        initial="hidden"
        whileInView='show'
        variants={upAnimation}
      className={Styles.aboutme__text}>
        Hello there! My name is Prakash, and I completed my Mechanical
        Engineering degree in 2017. After working as a machine operator for some
        time, I discovered my passion for web development and made a career
        transition in 2022. Since then, I have been a self-learner, acquiring
        skills in{" "}
        <strong className={Styles.strong__tech}>
          {" "}
          HTML , CSS , Sass , JavaScript , React , Nextjs , Typescript ,  Git &amp; GitHub , Tailwindcss, and
          Bootstrap {" "}
        </strong>{" "}
        through online resources. I have successfully completed several
        beginner-level projects, gaining valuable hands-on experience in web
        development. My ultimate goal is to become a software engineer, and I am
        determined to continue expanding my knowledge and expertise in this
        field.
      </motion.p>
    </div>
  );
}

export default Aboutus;
