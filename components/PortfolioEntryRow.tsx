import Image from "next/image";
import Link from "next/link";
import Toolkit from "@/components/Toolkit";
import { ProjectTitle, ProjectImage, Tool } from "@/lib/types";
import styles from "@/css/PortfolioEntryRow.module.css";
import siteStyles from "@/css/Site.module.css";

type PortfolioEntryRowProps = {
  title: ProjectTitle;
  image: ProjectImage;
  description: string;
  toolkit?: Tool[];
}

export default function PortfolioEntryRow({
  title: { heading, link },
  image: { src, alt, width = 350, height = 300 },
  description,
  toolkit = []
}: PortfolioEntryRowProps) {
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
