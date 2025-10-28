import Image from "next/image";
import Link from "next/link";
import Header from "@/components/PageHeader";
import { testimonials } from "@/data/testimonials";
import badge from "@/assets/icons/badge.svg";
import recommend from "@/assets/icons/recommend.svg";
import siteStyles from "@/css/Site.module.css";
import styles from "@/css/Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <Header />
      <div className={siteStyles.row}>
        <div className={styles.recommendationsHeading}>
          <Image src={recommend} width={35} height={35} alt="thumbs up" />
          <h1 className={siteStyles.heading}>Recommendations</h1>
        </div>
        {testimonials?.map((testimonial, index) => (
          <div key={`_${index}`} className={styles.testimonial}>
            <h2>
              <Link
                className={siteStyles.headingLink}
                href={testimonial.link}
                target="_blank">
                {testimonial.name}
              </Link>
            </h2>
            <h3 className={styles.position}>
              <Image src={badge} width="25" height="25" alt="job title" />
              <span>{testimonial.position}</span>
            </h3>
            <blockquote dangerouslySetInnerHTML={{ __html: testimonial.text }} />
          </div>
        ))}
      </div>
    </>
  );
}
