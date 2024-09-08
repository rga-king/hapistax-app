import Image from "next/image";
import Link from "next/link";
import { LINKEDIN_URL, TESTIMONIALS_LINK, CV_LINK, BIO_LINK } from "@/lib/constants";
import mugshot from "@/assets/images/mugshot.png";
import styles from "@/css/AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.container}>
      <Image
        className={styles.mugshot}
        src={mugshot}
        width="122"
        height="122"
        alt="Robin King"
      />
      <ul className={styles.aboutMeList}>
        <li>
          {" "}
          <Link href={LINKEDIN_URL} target="_blank" rel="noopener">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href={TESTIMONIALS_LINK}>Testimonials</Link>
        </li>
        {/* <li>
          <Link href={CV_LINK}>Curriculum Vitae</Link>
        </li> */}
        {/* <li>
          <Link href={BIO_LINK}>Bio</Link>
        </li> */}
      </ul>
    </section>
  );
}
