import styles from "@/css/Footer.module.css";
import siteStyles from "@/css/Site.module.css";

export default function Footer() {
  const year: string = new Date().getFullYear().toString();

  return (
    <div className={`${styles.footer} ${siteStyles.row}`}>
      <p>&copy; Robin King {year}</p>
    </div>
  );
}
