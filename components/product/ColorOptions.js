import { OverlayTrigger, Tooltip } from "react-bootstrap"

import styles from "./ColorOptions.module.scss"

const ColorOptions = (props) => {
  const { options = [], large = false } = props

  return (
    <div className={styles.ColorOptions}>
      {options.map((option, index) => (
        <OverlayTrigger
          key={"Item" + index}
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>{option.name}</Tooltip>}
        >
          <div
            className={large ? styles.ColorOptions_ItemLarge : styles.ColorOptions_Item}
            style={{ backgroundColor: option.code }}
          />
        </OverlayTrigger>
      ))}
    </div>
  )
}

export default ColorOptions
