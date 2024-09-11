import Image from "next/image";
import Project from "@/components/Project";
import { projects } from "@/data/projects";
import portfolioIcon from "@/assets/icons/icon-collection.svg";
import styles from "@/css/Portfolio.module.css";

export default function MyPortfolio() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <Image src={portfolioIcon} width={30} height={30} alt="Collection" />
        <h2>Portfolio</h2>
      </div>

      {projects?.map((project, index) => (
        <Project
          key={`project_${index}`}
          title={project.title}
          image={project.image}
          description={project.description}
          toolkit={project.toolkit}
        />
      ))}
    </section>
  );
}
