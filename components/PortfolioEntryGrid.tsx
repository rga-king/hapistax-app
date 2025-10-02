"use client";
import { useState } from "react";
import Link from "next/link";
import BaseModal from "@/components/BaseModal";
import ProjectDetails from "@/components/Project";
import PortfolioEntryDetailsButton from "@/components/PortfolioEntryDetailsButton";
import { Project } from "@/lib/types";
import styles from "@/css/PortfolioEntryGrid.module.css";
import siteStyles from "@/css/Site.module.css";

type PortfolioEntryGrid = {
  project: Project
}

export default function PortfolioEntryGrid({
  project
}: PortfolioEntryGrid) {
  const { heading, link } = project.title;
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  }

  const handleShowProject = () => {
    toggleModal();
  }

  return (
    <>
      <div className={styles.project}>
        <div className={styles.description}>
          <h3>
            <Link href={link} className={siteStyles.headingLink} target="_blank">
              {heading}
            </Link>
          </h3>
          <p>{project.description}</p>
        </div>
        <PortfolioEntryDetailsButton onClick={handleShowProject} />
      </div>
      <BaseModal isVisible={isVisible}>
        <ProjectDetails project={project} onClickClose={toggleModal} />
      </BaseModal>
    </>
  );
}
