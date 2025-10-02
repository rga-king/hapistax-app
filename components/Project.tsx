import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import Toolkit from "@/components/Toolkit";
import Recommendation from "@/components/Recommendation";
import { testimonials } from "@/data/testimonials";
import styles from "@/css/Project.module.css";
import siteStyles from "@/css/Site.module.css";
import closeIcon from "@/assets/icons/close.svg";

type ProjectProps = {
  project: Project,
  onClickClose: () => void
}

export default function Project ({ project, onClickClose }: ProjectProps) {
  const { heading, link } = project.title;
  const { src, alt, width = 350, height = 300 } = project.image;
  const recommendations = testimonials.filter((testimonial) => project.tag === testimonial.tag);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{heading}</h2>
        <button type="button" onClick={onClickClose}>Close <Image src={closeIcon} width="32" height="32" alt="Close project details"/></button>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>
          <p>{project?.description}</p>
          <Toolkit toolkit={project?.toolkit} />
        </div>
        <div className={styles.sidebar}>
          <Link href={link} className={styles.projectImage} target="_blank">
            <Image src={src} width={width} height={height} alt={alt} priority={true} />
          </Link>
          { recommendations && recommendations.length > 0 && (
            <div className={styles.recommendations}>
              <h3 className={styles.recommendationsHeading}>{`Recommendation${recommendations.length > 1 ? "s" : ""}`}</h3>
              {recommendations.map((recommendation, index) => (
                <Recommendation
                  key={`${recommendation.tag}_${index}`}
                  name={recommendation.name}
                  position={recommendation.position}
                  link={recommendation.link}
                  showText={false}
                />
              ))}
              <Link className={`${siteStyles.link} ${styles.recommendationsLink}`} href="/testimonials">SEE ALL RECOMMENDATIONS</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
