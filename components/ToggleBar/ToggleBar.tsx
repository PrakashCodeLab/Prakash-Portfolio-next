"use client";
import React, { useContext } from "react";
import Styles from "./Theme.module.scss";
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

const ToggleBar = () => {
  const context = useContext<ThemeContextType | undefined>(ThemeContext);
  if (!context) {
    return null;
  }

  const { toggle, theme } = context;

  return (
    <div
      onClick={toggle}
      style={
        theme === "dark"
          ? { right: 1, backgroundColor: "#0b132b" }
          : { left: 1, backgroundColor: "#008080" }
      }
      className={`${Styles.toggle__bar}`}
    >
      <MoonIcon className={`w-5 h-5 text-green-300`} />
      <div
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#99b6ec" }
            : { right: 1, backgroundColor: " #b6c3d6" }
        }
        className={`${Styles.toggle__ball} `}
      ></div>

      <SunIcon className={`  w-5 h-5  text-yellow-500  `} />
    </div>
  );
};

export default ToggleBar;
