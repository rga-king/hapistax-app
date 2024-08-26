// import Logo from "@/components/BaseLogo";
import Image from "next/image";
import Link from "next/link";
import styles from "@/css/Header_alt.module.css";
import linkedIn from "@/assets/icons/LinkedIn-Logos/LI-In-Bug.png";

export default function BaseHeader() {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}> */}
      {/* <Logo /> */}
      {/* <h1 className={styles.hapistax}>
          <span className={styles.hapi}>HAP</span><span className={styles.i}>i</span>
          <span className={styles.stax}>STAX</span>
        </h1> */}
      {/* </div> */}
      {/* <div className={styles.links}>
        <p className={styles.contact}>contact</p>
      </div> */}
      <span className={styles.moreInfo}>More information:</span>
      <Link href="bbc.co.uk">
        <Image src={linkedIn} width="40" height="32" alt="" />
      </Link>
      {/* <Link href="bbc.co.uk"><Image src={linkedIn} width="131" height="32" alt="" /></Link> */}
      <span className={styles.divider}>/</span>
      <Link href="bbc.co.uk" className={styles.link}>
        Testimonials
      </Link>
      <span className={styles.divider}>/</span>
      <Link href="bbc.co.uk" className={styles.link}>
        Curriculum Vitae
      </Link>
      <span className={styles.divider}>/</span>
      <Link href="bbc.co.uk" className={styles.link}>
        Bio
      </Link>
    </header>
  );
}
