import Image from "next/image";
import toolkitIcon from "@/assets/icons/toolkit.svg";
import styles from "@/css/Toolkit.module.css";
import Link from "next/link";

export default function Toolkit({ toolkit = [] }) {
  return (
    <>
      <div className={styles.heading}>
        <Image src={toolkitIcon} width={30} height={30} alt="Spanner" />
        <h4>TOOLKIT</h4>
      </div>
      <div className={styles.toolkit}>
        {toolkit?.map((tool, index) => (
          <div key={index} className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <Link href={tool.href} target="_blank">
                <Image
                  src={tool.image}
                  width="30"
                  height="30"
                  alt={tool.alt}
                  title={tool.alt}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
