import styles from "@/css/PortfolioEntryDetailsButton.module.css";

type PortfolioEntryDetailsButtonProps = {
  onClick: () => void
}

export default function PortfolioEntryDetailsButton ({ onClick }: PortfolioEntryDetailsButtonProps) {
  return (
    <div className={styles.portfolioButton}>
      <button type="button" onClick={onClick}>Find out more</button>
    </div>
    
  )
}