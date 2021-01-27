import styles from "./ProductCard.module.scss"

const ProductCard = () => (
  <div className={styles.ProductCard}>
    <div className={styles.ProductCard__ImageCont}>
      <img className={styles.ProductCard__Image} src="/prod1_grey3.jpg" />
    </div>
    <div className={styles.ProductCard__Content}>
      <div className={styles.ProductCard__Heading}>
        <div>White Traditional Long Dress</div>
        <div>$3.99</div>
      </div>
      <div className={styles.ProductCard__Option}>
        <div>Colors</div>
        <div>Sizes</div>
      </div>
      <div className={styles.ProductCard__Footer}>
        <div>Rating</div>
        <div>Buy</div>
      </div>
    </div>
  </div>
)

export default ProductCard
