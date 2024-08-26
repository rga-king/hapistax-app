import ProjectEntry from "@/components/ProjectEntry.jsx";
import { projects } from "@/data/projects";
import styles from "@/css/Portfolio.module.css";

export default function MyPortfolio() {
  return (
    <section className={styles.container}>
      <h2>Portfolio</h2>
      {projects?.map((project, index) => (
        <ProjectEntry
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
