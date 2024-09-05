import MyDetails from "@/components/MyDetails";
import AboutMe from "@/components/AboutMe";
import styles from "@/css/Home.module.css";

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <MyDetails />
      <AboutMe />
    </header>
  );
}
