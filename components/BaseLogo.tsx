import styles from "@/css/Logo.module.css";

export default function BaseLogo() {
  return (
    <span className={styles.hapistax}>
      <span>HAP</span>
      <span className={styles.i}>i</span>
      <span>STAX</span>
    </span>
  );
}
