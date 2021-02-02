import { useState } from "react"

import styles from "./Category.module.scss"

const CATEGORY = ["Best Seller", "New Product"]

const Category = (props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div className={styles.Category}>
      {CATEGORY.map((item, index) => {
        var itemStyle = styles.Category_Item

        if (index == selected) itemStyle += " " + styles.Category_Item___Selected

        return (
          <div key={"Item" + index} className={itemStyle} onClick={() => setSelected(index)}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default Category
