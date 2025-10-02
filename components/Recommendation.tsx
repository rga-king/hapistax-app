import RecommendationHeading from "@/components/RecommendationHeading";
import styles from "@/css/Recommendation.module.css";

type RecommendationProps = {
  name: string,
  position: string,
  link?: string,
  text?: string,
  showText: boolean
}

export default function Recommendation({
  name,
  position,
  link,
  text,
  showText = true
}: RecommendationProps) {
  return  (
    <div className={styles.recommendation}>
      <RecommendationHeading name={name} link={link} position={position} />
      {showText && text && <blockquote dangerouslySetInnerHTML={{ __html: text }} />}
    </div>
  )
}
