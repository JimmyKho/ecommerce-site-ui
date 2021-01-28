import styles from "./SizeOptions.module.scss"

const SizeOptions = (props) => {
  const { options = [], large = false } = props

  return (
    <div className={styles.SizeOptions}>
      {options.map((option, index) => (
        <div key={"Item" + index} className={large ? styles.SizeOptions_ItemLarge : styles.SizeOptions_Item}>
          {option.name}
        </div>
      ))}
    </div>
  )
}

export default SizeOptions
