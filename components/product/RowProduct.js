import ProductCard from "./ProductCard"

import styles from "./RowProduct.module.scss"

const RowProduct = (props) => {
  const { list = [] } = props

  return (
    <div className={styles.RowProduct}>
      {list.map((item) => (
        <div className={styles.RowProduct_Item}>
          <ProductCard />
        </div>
      ))}
    </div>
  )
}

export default RowProduct
