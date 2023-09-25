import Image from "next/image";
import BgHero from "@/public/assets/images/project/profilepic (1).jpg";
import Styles from "./Hero.module.scss";
import { useTheme } from "@/constants/useTheme";
import {motion} from 'framer-motion';
import { RightAnimation } from "@/constants/animation";
const ImgSection = () => {
  const theme = useTheme();
  return (
    <motion.div className={`${Styles.hero__img__card} ${theme === 'dark'? 'bg-[#0b132b]':'bg-[#457b9d9a]'}`}
          initial="hidden"
        whileInView='show'
        variants={RightAnimation }
    >
      <Image
        src={BgHero}
        quality={100}
        priority={true}
        placeholder="blur"
        
        alt="prakash profile picture"
        className={Styles.hero__img}
      />
    </motion.div>
  );
};

export default ImgSection;
