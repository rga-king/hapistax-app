import Image from "next/image";
import Link from "next/link";
import Toolkit from "@/components/Toolkit.jsx";
import styles from "@/css/Project.module.css";
import siteStyles from "@/css/Site.module.css";

export default function Project({
  title: { heading, link },
  image: { src, alt, width = "350", height = "300" },
  description,
  toolkit = []
}) {
  return (
    <div className={styles.project}>
      <Link href={link} className={styles.image} target="_blank">
        <Image src={src} width={width} height={height} alt={alt} priority={true} />
      </Link>
      <div className={styles.description}>
        <h3>
          <Link href={link} className={siteStyles.headingLink} target="_blank">
            {heading}
          </Link>
        </h3>
        <p>{description}</p>
      </div>
      <div className={styles.toolkit}>
        <Toolkit toolkit={toolkit} />
      </div>
    </div>
  );
}
