"use client";

import React from "react";
import Styles from "./Social.module.scss";
import { HeadingLine } from "../components";
import { socialData } from "@/constants/constant";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/constants/useTheme";
import {motion} from 'framer-motion';
import { itemOpacity, upAnimation } from "@/constants/animation";
const SocialSection = () => {
  const theme = useTheme();

  return (
    <section id="contact"
      className={`${Styles.social__connect__section} ${
        theme === "light" ? "bg-[#f5f5f5]" : "bg-[#030f30]"
      }`}
    >
      <div className={Styles.social__connect__wrapper}>
        <h4>
          <HeadingLine heading="let's connect " />
        </h4>
        <motion.h6
             initial="hidden"
             whileInView='show'
             variants={itemOpacity}
        >my social</motion.h6>
        <div className={Styles.social__body__section}>
          {socialData.map((data) => (
            <motion.div
            initial="hidden"
            whileInView='show'
            variants={upAnimation}
              key={data.id}
              id="contactUs"
              className={Styles.social__media__btn}
            >
              <Link
                className={`${Styles.btn__social} ${Styles.btn__block}`}
                href={data.socialLink}
              >
                <span className={Styles.icon__btn}>
                  <Image
                    src={data.socialIcon}
                    width={40}
                    height={40}
                    alt="logo image"
                  />
                </span>
                <span className={Styles.social__title}>{data.socialName}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
