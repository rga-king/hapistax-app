import Image from "next/image";
import javascript from "@/assets/images/toolkit/javascript.svg";
import styles from "@/css/Toolkit.module.css";

export default function Toolkit({toolkit = []}) {
  return (
    <>
      <h3 className={styles.toolkitH3}>TOOLKIT</h3>
      <div className={styles.toolkit}>
        {toolkit?.map((tool, index) => (
          <div key={index} className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <Image src={tool.image} width="30" height="30" alt="tool.alt " />
            </div>
          </div>
        ))}
        {/* <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <Image src={javascript} width="30" height="30" alt="Javascript " />
          </div>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <Image src={javascript} width="30" height="30" alt="Javascript " />
          </div>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <Image src={javascript} width="30" height="30" alt="Javascript " />
          </div>
        </div> */}
      </div>
    </>
  )
}