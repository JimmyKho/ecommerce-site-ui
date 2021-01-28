import CardPrice from "./CardPrice"
import ColorOptions from "./ColorOptions"
import SizeOptions from "./SizeOptions"

import styles from "./ProductCard.module.scss"

const ProductCard = (props) => {
  const { name = "", price = 0, oriPrice = 0, attr = {} } = props.data ?? {}
  const { colors = [], sizes = [] } = attr

  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductCard_ImageCont}>
        <img className={styles.ProductCard_Image} src="/prod1_grey3.jpg" />
      </div>
      <div className={styles.ProductCard_Content}>
        <div className={styles.ProductCard_Heading}>
          <div className={styles.ProductCard_Heading_Title}>{name}</div>
          <div className={styles.ProductCard_Heading_Price}>
            <CardPrice price={price} oriPrice={oriPrice} />
          </div>
        </div>
        <div className={styles.ProductCard_Option}>
          <ColorOptions options={colors} />
          <SizeOptions options={sizes} />
        </div>
        <div className={styles.ProductCard_Footer}>
          <div>Rating</div>
          <div>Buy</div>
        </div>
      </div>
    </div>
  )
}

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

const SIZES = [
  {
    name: "X",
  },
  {
    name: "M",
  },
  {
    name: "L",
  },
]
