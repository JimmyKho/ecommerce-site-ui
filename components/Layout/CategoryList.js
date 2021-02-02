import CategoryListItem from "./CategoryListItem"

import styles from "./Category.module.scss"

const CategoryList = (props) => (
  <div className={styles.CategoryList}>
    {LIST.map((item, index) => (
      <CategoryListItem key={"Item" + index} name={item} />
    ))}
  </div>
)

export default CategoryList

const LIST = ["Top", "Bottom", "Swim Wear", "Watch", "Shoes", "Bag", "Accessories", "Sports", "Cosmetic", "Muslim Wear"]
