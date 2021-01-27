import ProductCard from "../product/ProductCard"

import styles from "./HomeListingLayout.module.scss"

const HomeListingLayout = (props) => (
  <div className={styles.HomeListingLayout}>
    <div className={styles.HomeListingLayout__Heading}>Flash Sales</div>
    <div className={styles.HomeListingLayout__Content}>
      <div className={styles.HomeListingLayout__Content__Product}>
        <ProductCard />
      </div>
      <div className={styles.HomeListingLayout__Content__Product}>
        <ProductCard />
      </div>
      <div className={styles.HomeListingLayout__Content__Product}>
        <ProductCard />
      </div>
      <div className={styles.HomeListingLayout__Content__Product}>
        <ProductCard />
      </div>
    </div>
  </div>
)

export default HomeListingLayout
