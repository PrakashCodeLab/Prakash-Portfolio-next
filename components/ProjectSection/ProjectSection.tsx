"use client";

import React from "react";
import Styles from "./Project.module.scss";
import ProjectCard from "./ProjectCard";
import { HeadingLine } from "../components";
import { useTheme } from "@/constants/useTheme";

const ProjectSection = () => {
  const theme = useTheme();
  return (
    <section id="project"
      className={`${Styles.project__section} ${
        theme === "light" ? "bg-[#ffd9e6]" : "bg-[#020c1b]"
      }`}
    >
      <h2 className={Styles.project__section__heading}>
        <HeadingLine heading="Some Things I&apos;ve Built" />
      </h2>
      <>
        <ProjectCard />
      </>
    </section>
  );
};

export default ProjectSection;
