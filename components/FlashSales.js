import { useEffect, useState } from "react"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"

import styles from "./FlashSales.module.scss"

const FlashSales = (props) => {
  const [duration, setDuration] = useState(moment.duration())

  useEffect(() => {
    const interval = setInterval(() => {
      const end = moment().endOf("day")
      const diff = end.diff(moment())
      const durationObj = moment.duration(diff)

      if (durationObj.asSeconds() <= 0) {
        setDuration(moment.duration(0))
      } else {
        setDuration(durationObj)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.FlashSales}>
      <FontAwesomeIcon className={styles.FlashSales_Icon} icon={faBolt} />
      <div className={styles.FlashSales_Text}>Flash Sale</div>

      <div className={styles.FlashSales_Timer}>
        <div className={styles.FlashSales_Timer_Item}>{displayNumber(duration.hours())}</div>
        <div className={styles.FlashSales_Timer_Item}>{displayNumber(duration.minutes())}</div>
        <div className={styles.FlashSales_Timer_Item}>{displayNumber(duration.seconds())}</div>
      </div>
    </div>
  )
}

const displayNumber = (number) => {
  return ("0" + number).slice(-2)
}

export default FlashSales
