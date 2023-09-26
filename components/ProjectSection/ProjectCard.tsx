import React from 'react';
import Styles from './Project.module.scss';
import { cardData } from '@/constants/constant';
import Image from 'next/image';
import Link from 'next/link';
import LinkImg from '@/public/assets/images/social/icons8-link-48.png';
import GitImg from  '@/public/assets/images/social/icons8-github-48.png';
import { useTheme } from '@/constants/useTheme';
import {motion} from 'framer-motion'
import { upAnimation } from '@/constants/animation';
const ProjectCard = () => {
  const theme = useTheme(); 
  return (
    <div
   
    className={Styles.project__wrapper__section}>
      {cardData.map((data) => (
        <motion.article
        initial="hidden"
        whileInView='show'
        variants={upAnimation}
          className={`${Styles.project__card__body}  max-sm:w-[280px] ${theme === 'dark'? 'bg-[#0a192f]':''}`}
          key={data.id}
        >
          <div className={Styles.project__img__container}>
            <Image
              
              src={data.poster}
              alt="poster"
              className={Styles.project__card__image}
            />
          </div>
          <div className={Styles.project__icon__section}>
           <Image src={data.icon1} className='w-auto h-auto' width={35} height={35} alt="Project Logo" />
           <Image src={data.icon2} className='w-auto h-auto' width={35} height={35} alt="Project Logo" />
           {data.icon3 ? (
           <Image src={data.icon3.src} width={35} height={35}  className='w-auto h-auto' alt="Project Logo" /> ) : null}

          </div>

          <div className={Styles.project__descrption__section}>
            <h4 className={`${Styles.project__desc__heading} capitalize font-bold `}>{data.title}</h4>
            <p className={`${Styles.project__desc__lead} ${theme === 'dark'? 'text-':''} `}>{data.description}</p>
          </div>

          <div className={Styles.project__tech__section}>
            <h4 className={Styles.project__stack__lead}>stack</h4>
            <div className={Styles.project__tech__used}>
              <h5 className={Styles.tech__lead}>{data.tech1}</h5>
              <h5 className={Styles.tech__lead}>{data.tech2}</h5>
              {data.tech3 ? <h5 className={Styles.tech__lead}>{data.tech3}</h5> : null}
            </div>
          </div>

          <div className={Styles.project__btn__section}>
            <Link href={data.webLink}  className={`${Styles.btn} ${Styles.btn__visit}`}>
              visit <Image src={LinkImg} width={30} height={30} alt="logo" className={`${Styles.icon} ${Styles.icon__link}`} />
            </Link>
            <Link href={data.gitLink}  className={`${Styles.btn} ${Styles.btn__code}`}>
              code <Image src={GitImg} width={30} height={30} alt="logo" className={`${Styles.icon} ${Styles.icon__code}`} />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default ProjectCard;
