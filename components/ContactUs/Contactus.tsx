"use client";

import React from "react";
import Styles from "./Contact.module.scss";
import { LogoIcon } from "../components";
import Link from "next/link";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import {motion} from 'framer-motion';
import { useTheme } from "@/constants/useTheme";
import { itemOpacity } from "@/constants/animation";

const Contactus = () => {
  const emailLink = "prakashtechweb@gmail.com";
  const theme = useTheme();
  return (
    <section
      className={`${Styles.contact__section__body} ${
        theme === "light" ? "bg-[#f5f5f5]" : "bg-[#030f30]"
      }`}
    >
      <motion.div
           initial="hidden"
           whileInView='show'
           variants={itemOpacity}
      
      className={Styles.contact__section__wrapper}>
        <div className={Styles.contact__logo}>
          <LogoIcon />
        </div>

        <div className={Styles.contact__heading}>
          <h2>lets talk</h2>
        </div>

        <div className={Styles.contact__email__section}>
          <Link
            className={Styles.contact__link__btn}
            href={`mailto:${emailLink}?service=mail&uriprop=openwithservice`}
          >
            <span>lets chat</span>
            <span>
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-white" />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Contactus;
