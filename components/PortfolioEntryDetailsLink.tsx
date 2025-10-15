import Link from "next/link";
import styles from "@/css/PortfolioEntryDetailsLink.module.css";

type PortfolioEntryDetailsLinkProps = {
  projectId: string
}

export default function PortfolioEntryDetailsLink ({ projectId }: PortfolioEntryDetailsLinkProps) {
  const link: string = `/project/${projectId}`;

  return (
    <Link className={styles.portfolioLink} href={link}>Find out more</Link>
  )
}
