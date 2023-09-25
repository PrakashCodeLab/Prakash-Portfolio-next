import { StaticImageData } from "next/image";


 type SocialProps = {
    id: number;
    socialName: string;
    socialIcon:any; // Assuming you want to allow any React Node here
    socialLink:string;
  }

type CardDataProps={
  
    id: number;
    title: string;
    description:string;
    poster: StaticImageData,

    tech1: string;
    tech2:string;
    tech3?: string;
    webLink: string;
    gitLink: string;
    icon1: StaticImageData;
    icon2: StaticImageData;
    icon3?: StaticImageData;
  
}

type TechDataProps={ 
  title: string;
   icon: StaticImageData;
    id: number 
  }

  type ListSectionProps ={
    id: number;
    link: string;
    title: string;
  }

   type headingProps={
    heading: string;
  }

  export type {SocialProps ,CardDataProps,TechDataProps,ListSectionProps,headingProps};