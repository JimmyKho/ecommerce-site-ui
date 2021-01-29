import ProductCard from "./ProductCard"

import styles from "./RowProduct.module.scss"

const RowProduct = (props) => {
  const { list = [] } = props

  return (
    <div className={styles.RowProduct}>
      {list.map((item, index) => (
        <div key={"Item" + index} className={styles.RowProduct_Item}>
          <ProductCard data={item} />
        </div>
      ))}
    </div>
  )
}

export default RowProduct
