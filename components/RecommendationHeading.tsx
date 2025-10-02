import Link from "next/link";
import Image from "next/image";
import badge from "@/assets/icons/badge.svg";
import styles from "@/css/RecommendationHeading.module.css";
import siteStyles from "@/css/Site.module.css";

type RecommendationHeadingProps = {
  name: string,
  position: string,
  link?: string,
}

type RecommendationNameProps = {
  name: string,
  link?: string,
}

function RecommendationName({ link, name }: RecommendationNameProps) {
  if (!link) return <h3 className={styles.name}>{name}</h3>;
  return <h3 className={styles.name}><Link className={siteStyles.headingLink} href={link} target="_blank">{name}</Link></h3>;
}

export default function RecommendationHeading({
  name,
  link,
  position
}: RecommendationHeadingProps) {
  return (
    <div className={styles.recommendationHeading}>
      <RecommendationName name={name} link={link} />
      <h4 className={styles.position}>
        <Image src={badge} width="25" height="25" alt="job title" />
        <span>{position}</span>
      </h4>
    </div>
  )
}