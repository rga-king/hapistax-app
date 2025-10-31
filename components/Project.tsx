import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import Toolkit from "@/components/Toolkit";
import Recommendation from "@/components/Recommendation";
import { recommendations as allRecommendations } from "@/data/recommendations";
import styles from "@/css/Project.module.css";
import siteStyles from "@/css/Site.module.css";

type ProjectProps = {
  project: Project,
}

export default function Project ({ project }: ProjectProps) {
  const { heading, link, subtitle, timeline } = project.title;
  const { src, alt, width = 350, height = 300 } = project.image;
  const recommendations = allRecommendations.filter((recommendation) => project.tag === recommendation.tag);

  return (
    <div className={`${styles.container} ${siteStyles.row}`}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h2>{heading}</h2>
          { subtitle && timeline && (
            <h3>{subtitle}, <span className={styles.timeline}>{timeline}</span></h3>
          )}
        </div>
        <div className={styles.description}>
          <div dangerouslySetInnerHTML={{ __html: project.description.full}}></div>
          <Toolkit toolkit={project.toolkit} />
        </div>
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
              <Link
                className='link'
                href="/testimonials"
                data-link="recommendations"
                >
                  SEE ALL RECOMMENDATIONS
                </Link>
            </div>
          )}
        </div>
    </div>
  );
}
