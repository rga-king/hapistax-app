import styles from "@/css/Footer.module.css";

export default function Footer() {
  const year: string = new Date().getFullYear().toString();

  return (
    <div className={styles.footer}>
      <p>&copy; Robin King {year}</p> 
    </div>
  )
}