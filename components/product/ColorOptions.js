import { OverlayTrigger, Tooltip } from "react-bootstrap"

import styles from "./ColorOptions.module.scss"

const ColorOptions = (props) => {
  const { options = [], large = false, selected, onSelect } = props

  const onSelectFn = (item) => {
    if (!onSelect) return

    onSelect(item)
  }

  return (
    <div className={styles.ColorOptions}>
      {options.map((option, index) => {
        var itemStyle = large ? styles.ColorOptions_ItemLarge : styles.ColorOptions_Item

        if (selected == option.name) itemStyle += " " + styles.ColorOptions___Selected

        return (
          <OverlayTrigger
            key={"Item" + index}
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip>{option.name}</Tooltip>}
          >
            <div
              onClick={() => onSelectFn(option.name)}
              className={itemStyle}
              style={{ backgroundColor: option.code }}
            />
          </OverlayTrigger>
        )
      })}
    </div>
  )
}

export default ColorOptions
