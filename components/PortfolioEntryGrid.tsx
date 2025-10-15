import PortfolioEntryDetailsLink from "@/components/PortfolioEntryDetailsLink";
import styles from "@/css/PortfolioEntryGrid.module.css";

type PortfolioEntryGridProps = {
  id: string,
  heading: string,
  description: string,
}

export default function PortfolioEntryGrid({
  id,
  heading,
  description
}: PortfolioEntryGridProps) {
  return (
    <div className={styles.project}>
      <div className={styles.description}>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div>
        <PortfolioEntryDetailsLink projectId={id} />
      </div>
    </div>
  );
}
