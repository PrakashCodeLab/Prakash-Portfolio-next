"use client";
import React, { useState , useEffect} from "react";
import Styles from "./Navabar.module.scss";
import { LogoIcon, ToggleBar } from "../components";
import Link from "next/link";
import { Bars3Icon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { ListSection } from "@/constants/constant";
import { useTheme } from "@/constants/useTheme";
import {motion} from 'framer-motion';
import { DownAnimation } from "@/constants/animation";

const Navbar = () => {
  const bodyElement = document.querySelector('body__container');
  const theme = useTheme();

  const [nav, setNav] = useState(false);
   
 
 
   const HandleChange = () => {
    setNav((pre) => !pre);
   
     
  };


  const handleNav = ()=> {
      setNav(false);
  }


  useEffect(()=>{

    const Body = document.querySelector('.body');
     if(nav){
      Body?.classList.add('body__overflow');
     
     }

 

   
     return()=>{
      Body?.classList.remove('body__overflow');
      
     }
  },[nav])     
  

  return (
    <header className={`${Styles.header__container}`}>
    <motion.nav
    initial="hidden"
    animate='show'
    variants={DownAnimation}
      className={`${Styles.navbar__section} ${
        theme === "dark" ? "bg-[#1d3557ff]" : "bg-[#f5f5f5]"
      } `}
    >
      <div className={Styles.navabr__logo__section}>
        <LogoIcon />
      </div>

      <div className={Styles.navbar__desktop}>
        <ul className={Styles.navbar__list__desktop}>
          {ListSection.map((list, index) => (
            <li key={index} className={Styles.list__desktop}>
              <Link
                className={`${Styles.link__desktop} ${
                  theme === "light" ? "text-[#333333]" : " bg-opacity-20 backdrop-blur-md "
                }`}
                href={`${list.link}`}
              >
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={Styles.navbar__hamburger__secttion}>
        <ToggleBar />
        <div onClick={HandleChange} className={Styles.hamburger}>
          {" "}
          {nav ? (
            <MinusCircleIcon className="h-6 w-6 text-gray-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-500" />
          )}
        </div>
      </div>

      {nav && (
        <motion.div 
          initial="hidden"
          animate={nav? "show" : "hidden" }
          exit='hidden'
          variants={DownAnimation}

          className={`${Styles.mobile__navbar}  ${
            theme === "dark" ? "bg-[#1d3557ff] " : "bg-[#f5f5f5] text-[#33333]"
          }`}
        >
          <ul className={Styles.navbar__list__mobile}>
            {ListSection.map((list, index) => (
              <li  key={index} className={Styles.list__mobile}>
                <Link onClick={handleNav} className={Styles.link__mobile} href={`${list.link}`}>
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
    </header>
  );
};

export default Navbar;
