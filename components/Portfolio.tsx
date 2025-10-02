import Image from "next/image";
import PortfolioEntryGrid from "@/components/PortfolioEntryGrid";
import { projects } from "@/data/projects";
import portfolioIcon from "@/assets/icons/icon-collection.svg";
import styles from "@/css/Portfolio.module.css";

export default function Portfolio() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <Image src={portfolioIcon} width={30} height={30} alt="Collection" />
        <h2>Portfolio</h2>
      </div>
      <div className={styles.portfolioEntries}>
        {projects?.map((project, index) => (
          <PortfolioEntryGrid
            key={`project_${index}`}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
