import Link from "next/link";
import Mugshot from "@/components/Mugshot";
import { LINKEDIN_URL, TESTIMONIALS_LINK } from "@/lib/constants";
import styles from "@/css/AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.mugshot}>
        <Mugshot />
      </div>
      <ul className={styles.aboutMeList}>
        <li>
          {" "}
          <Link href={LINKEDIN_URL} target="_blank" rel="noopener">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href={TESTIMONIALS_LINK}>Recommendations</Link>
        </li>
      </ul>
    </section>
  );
}
