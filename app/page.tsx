import MyDetails from "@/components/MyDetails";
import AboutMe from "@/components/AboutMe";
import HomeHeader from "@/components/HomeHeader";
import Portfolio from "@/components/Portfolio.jsx";
import styles from "@/css/Home.module.css";
import siteStyles from "@/css/Site.module.css";

export default function Home() {
  return (
    <>
      <div className={siteStyles.row}>
        <HomeHeader />
      </div>
      <main>
        <div className={`${siteStyles.row} ${styles.portfolio}`}>
          <Portfolio />
        </div>
      </main>
    </>
  );
}
