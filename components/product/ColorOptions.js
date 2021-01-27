import styles from "./ColorOptions.module.scss"

const ColorOptions = (props) => {
  const { options = [] } = props

  return (
    <div className={styles.ColorOptions}>
      {options.map((option, index) => (
        <div key={"Item" + index} className={styles.ColorOptions__Item} style={{ backgroundColor: option.code }} />
      ))}
    </div>
  )
}

export default ColorOptions
