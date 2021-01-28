import styles from "./CardPrice.module.scss"

const CardPrice = (props) => {
  const { price, oriPrice } = props

  return (
    <div className={styles.CardPrice}>
      <div className={styles.CardPrice_Price}>{getPrice(price)}</div>
      <div className={styles.CardPrice_OriPrice}>{getPrice(oriPrice)}</div>
    </div>
  )
}

const getPrice = (value) => {
  return `$${value.toFixed(2)}`
}

export default CardPrice
