"use client";


import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProviders = ({ children }:{children:React.ReactNode}) => {
    
    const context = useContext<ThemeContextType| undefined>(ThemeContext)
   
    const  theme   = context?.theme;
 

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={`${theme}`}>{children}</div>;
  }

  return null ;
};

export default ThemeProviders;
