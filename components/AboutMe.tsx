import Image from "next/image";
import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/constants";
import linkedIn from "@/assets/icons/LinkedIn-Logos/LI-In-Bug.png";
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
      <Link href={LINKEDIN_URL} className={styles.linkedIn} target="_blank" rel="noopener"><Image src={linkedIn} width="140" height="118" alt="" /></Link>
      <ul className={styles.links}>
        <li><Link href={LINKEDIN_URL} className={siteStyles.link}>Linked In</Link></li>
        {/* <li>Testimonials</li> */}
        <li><Link href="/cv" className={siteStyles.link}>Curriculum Vitae</Link></li>
        <li><Link href="/testimonials" className={siteStyles.link}>Testimonials & Bio</Link></li>
      </ul>
    </section>

  )
}