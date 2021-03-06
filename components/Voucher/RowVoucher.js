import VoucherCard from "./VoucherCard"

import styles from "./RowVoucher.module.scss"

const RowVoucher = (props) => {
  const { list = [] } = props

  return (
    <div className={styles.RowVoucher}>
      {list.map((item, index) => (
        <div key={"Item" + index} className={styles.RowVoucher_Item}>
          <VoucherCard data={item} />
        </div>
      ))}
    </div>
  )
}

export default RowVoucher
