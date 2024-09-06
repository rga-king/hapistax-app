import Link from "next/link";
import Logo from "@/components/BaseLogo";
import siteStyles from "@/css/Site.module.css";
import styles from "@/css/Header.module.css";

export default function HomeHeader() {
  return (
    <header className={`${siteStyles.row} ${siteStyles.logoLink} ${styles.header}`}>
      <Link href="/">
        <Logo />
      </Link>
    </header>
  );
}
