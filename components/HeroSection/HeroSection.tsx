'use client';

import React   from 'react';
import Styles from './Hero.module.scss';
import { HeadingLine } from '../components';
import Link from 'next/link';
import ImgSection from './ImageSection';
import { motion } from "framer-motion"
import { useTheme } from '@/constants/useTheme';
import { LeftAnimation } from '@/constants/animation';


const HeroSection = () => {
  const theme = useTheme();
  
  
  
  const MyResume = "https://resume-prakash.vercel.app/"
  return (
    <div className={`${Styles.header__hero__section} ${theme === 'light' ? 'text-[#333333]':''}`}>
      
      <motion.div
       initial='hidden'
       whileInView='show'
       variants={LeftAnimation}
        className={Styles.header__hero__content}
      >
        <p className={Styles.lead}>Hi, my name is</p>
        <HeadingLine heading="prakash!" />
        <p className={Styles.lead__designation}>I am deeply passionate about software development, and I possess proficiency in essential web programming languages such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Nextjs</strong> and <strong>Typescript</strong> Currently, I am actively seeking a junior developer position, as I have recently acquired coding skills through self-learning.
        </p>
        <Link href={MyResume} download className={Styles.btn__resume}>
          my resume
        </Link>
      </motion.div>
      <div

        className={Styles.hero__section__img__container}
      >
        <ImgSection />
      </div>
    </div>
  );
}

export default HeroSection;
