import styles from "./Category.module.scss"

const CategoryListItem = (props) => {
  const { name = "" } = props
  return <div className={styles.CategoryList_Item}>{name}</div>
}

export default CategoryListItem
