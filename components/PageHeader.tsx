import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/BaseLogo";
import Mugshot from "@/components/Mugshot";
import siteStyles from "@/css/Site.module.css";
import styles from "@/css/Header.module.css";

export default function HomeHeader() {
  return (
    <header className={`${siteStyles.row} ${siteStyles.logoLink} ${styles.header}`}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles.mugshot}>
        <Mugshot width={48} height={48} />
      </div>
    </header>
  );
}
