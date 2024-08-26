import Logo from "@/components/BaseLogo";
import styles from "@/css/Details.module.css";

export default function MyDetails() {
  return (
    <section className={styles.container}>
      <Logo />
      <span className={styles.intro}>
        {" "}
        is the online home of <span className={styles.highlight}>Robin King</span>, a{" "}
        <span className={styles.highlight}>software developer</span> based in Harpenden, Herts, UK.
      </span>
    </section>
    // <section className={styles.container}>
    //   <Header />
    //   <span className={styles.intro}>Hapistax is the online home of <span className={styles.highlight}>Robin King</span>, a <span className={styles.highlight}>software developer</span> based in Harpenden, Herts, UK.</span>
    // </section>
  );
}
