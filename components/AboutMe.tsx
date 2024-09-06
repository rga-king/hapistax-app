import Image from "next/image";
import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/constants";
import linkedIn from "@/assets/icons/LinkedIn-Logos/LI-In-Bug.png";
import mugshot from "@/assets/images/mugshot.png";
import styles from "@/css/AboutMe.module.css";
import siteStyles from "@/css/Site.module.css";

export default function AboutMe() {
  return (
    <section className={styles.container}>
      {/* <p>Find out more about me through</p>
      <ul className={styles.aboutMeList}>
        <li>LinkedIn</li>
        <li>Testimonials</li>
        <li>Curriculum Vitae</li>
        <li>Bio</li>
      </ul> */}
      <Image
        className={styles.mugshot}
        src={mugshot}
        width="102"
        height="102"
        alt="Robin King"
      />
      <div className={styles.linksWrapper}>
        <Link
          href={LINKEDIN_URL}
          className={styles.linkedIn}
          target="_blank"
          rel="noopener">
          <Image src={linkedIn} width="140" height="118" alt="LinkedIn" />
        </Link>
        <Link
          className={`${siteStyles.link} ${styles.testimonialLink}`}
          href="/testimonials">
          Testimonials
        </Link>
      </div>
    </section>
  );
}
