import styles from "./SizeOptions.module.scss"

const SizeOptions = (props) => {
  const { options = [], large = false, selected, onSelect } = props

  const onSelectFn = (item) => {
    if (!onSelect) return

    onSelect(item)
  }

  return (
    <div className={styles.SizeOptions}>
      {options.map((option, index) => {
        var itemStyle = large ? styles.SizeOptions_ItemLarge : styles.SizeOptions_Item

        if (selected == option.name) itemStyle += " " + styles.SizeOptions___Selected

        return (
          <div onClick={() => onSelectFn(option.name)} key={"Item" + index} className={itemStyle}>
            {option.name}
          </div>
        )
      })}
    </div>
  )
}

export default SizeOptions
