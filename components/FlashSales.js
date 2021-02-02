import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"

import styles from "./FlashSales.module.scss"

const FlashSales = (props) => {
  return (
    <div className={styles.FlashSales}>
      <FontAwesomeIcon className={styles.FlashSales_Icon} icon={faBolt} />
      <div className={styles.FlashSales_Text}>Flash Sale</div>

      <div className={styles.FlashSales_Timer}>
        <div className={styles.FlashSales_Timer_Item}>00</div>
        <div className={styles.FlashSales_Timer_Item}>00</div>
        <div className={styles.FlashSales_Timer_Item}>00</div>
      </div>
    </div>
  )
}

export default FlashSales
