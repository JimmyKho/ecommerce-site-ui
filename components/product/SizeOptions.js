import styles from "./SizeOptions.module.scss"

const SizeOptions = (props) => {
  const { options = [] } = props

  return (
    <div className={styles.SizeOptions}>
      {options.map((option, index) => (
        <div key={"Item" + index} className={styles.SizeOptions_Item}>
          {option.name}
        </div>
      ))}
    </div>
  )
}

export default SizeOptions
