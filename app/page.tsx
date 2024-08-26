import MyDetails from "@/components/MyDetails";
// import Toolbox from "@/components/Toolbox";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio.jsx";
import styles from "@/css/Layout.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.row}>
        <MyDetails />
        <AboutMe />
      </div>
      <div className={styles.row}>
        <Portfolio />
      </div>
    </main>
  );
}
