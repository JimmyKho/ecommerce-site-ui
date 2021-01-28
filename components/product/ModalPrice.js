import styles from "./Price.module.scss"

const ModalPrice = (props) => {
  const { price, oriPrice } = props

  return (
    <div className={styles.ModalPrice}>
      <div className={styles.ModalPrice_Price}>{getPrice(price)}</div>
      <div className={styles.ModalPrice_OriPrice}>{getPrice(oriPrice)}</div>
    </div>
  )
}

const getPrice = (value) => {
  return `$${value.toFixed(2)}`
}

export default ModalPrice
