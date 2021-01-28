import ProductCard from "../Product/ProductCard"

import styles from "./HomeContentLayout.module.scss"

const HomeContentLayout = (props) => {
  const { title, more, children } = props

  return (
    <div className={styles.HomeContentLayout}>
      <div className={styles.HomeContentLayout_Heading}>
        <div className={styles.HomeContentLayout_Heading_Title}>{title}</div>
        <div className={styles.HomeContentLayout_Heading_More}>{more}</div>
      </div>
      <div className={styles.HomeContentLayout_Content}>
        <div className={styles.HomeContentLayout_Content_Item}>
          <ProductCard />
        </div>
        <div className={styles.HomeContentLayout_Content_Item}>
          <ProductCard />
        </div>
        <div className={styles.HomeContentLayout_Content_Item}>
          <ProductCard />
        </div>
        <div className={styles.HomeContentLayout_Content_Item}>
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default HomeContentLayout
