import Link from "next/link";
import Header from "@/components/PageHeader";
import { testimonialBmjPm } from "@/data/testimonials";
import siteStyles from "@/css/Site.module.css";
import styles from "@/css/Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <Header />
      <div className={siteStyles.row}>
        <h1 className={siteStyles.heading}>Testimonials</h1>
        <div className={styles.testimonial}>
          <h2>
            {" "}
            Ross Whistler, Head of Learning & Assessment Products at{" "}
            <Link
              className={siteStyles.link}
              href="https://bmjgroup.com/"
              target="_blank">
              BMJ Group
            </Link>
          </h2>
          <blockquote dangerouslySetInnerHTML={{ __html: testimonialBmjPm }} />
        </div>
      </div>
    </>
  );
}
