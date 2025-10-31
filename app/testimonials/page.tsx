import Image from "next/image";
import Header from "@/components/PageHeader";
import Recommendation from "@/components/Recommendation";
import { recommendations } from "@/data/recommendations";
import recommend from "@/assets/icons/recommend.svg";
import siteStyles from "@/css/Site.module.css";
import styles from "@/css/Recommendations.module.css";

export default function Testimonials() {
  return (
    <>
      <Header />
      <div className={siteStyles.row}>
        <div className={styles.recommendationsHeading}>
          <Image src={recommend} width={35} height={35} alt="thumbs up" />
          <h1 className={siteStyles.heading}>Recommendations</h1>
        </div>
        {recommendations?.map((recommendation, index) => (
          <div key={`_${index}`} className={styles.recommendation}>
            <Recommendation
              key={`${recommendation.tag}_${index}`}
              name={recommendation.name}
              position={recommendation.position}
              link={recommendation.link}
              showText={false}
            />
            <blockquote dangerouslySetInnerHTML={{ __html: recommendation.text }} />
          </div>
        ))}
      </div>
    </>
  );
}
