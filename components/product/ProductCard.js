import ColorOptions from "./ColorOptions"

import styles from "./ProductCard.module.scss"

const ProductCard = () => (
  <div className={styles.ProductCard}>
    <div className={styles.ProductCard__ImageCont}>
      <img className={styles.ProductCard__Image} src="/prod1_grey3.jpg" />
    </div>
    <div className={styles.ProductCard__Content}>
      <div className={styles.ProductCard__Heading}>
        <div className={styles.ProductCard__Heading__Title}>White Traditional Long Dress</div>
        <div className={styles.ProductCard__Heading__Price}>$3.99</div>
      </div>
      <div className={styles.ProductCard__Option}>
        <ColorOptions options={COLORS} />
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

const COLORS = [
  {
    name: "White",
    code: "#fdfdfd",
  },
  {
    name: "Brown",
    code: "#a47551",
  },
  {
    name: "white",
    code: "#003060",
  },
]
