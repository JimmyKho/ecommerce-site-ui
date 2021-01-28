import styles from "./VoucherCard.module.scss"

const VoucherCard = (props) => {
  const { name = "", code = "", discAmount = 0 } = props.data ?? {}

  return (
    <div className={styles.VoucherCard}>
      <div className={styles.VoucherCard_Content}>
        <div className={styles.VoucherCard_Content_Name}>{name}</div>
        <div className={styles.VoucherCard_Content_Code}>{code}</div>
      </div>
      <div className={styles.VoucherCard_Discount}>
        <div className={styles.VoucherCard_Discount_Amount}>{discAmount} %</div>
        <div className={styles.VoucherCard_Discount_Desc}>Off</div>
      </div>
    </div>
  )
}

export default VoucherCard
