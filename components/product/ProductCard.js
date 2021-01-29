import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"

import CardPrice from "./CardPrice"
import ColorOptions from "./ColorOptions"
import SizeOptions from "./SizeOptions"
import ProductModal from "./ProductModal"

import styles from "./ProductCard.module.scss"

const ProductCard = (props) => {
  const [show, setShow] = useState(false)
  const [size, setSize] = useState()
  const [color, setColor] = useState()

  const { name = "", price = 0, oriPrice = 0, attr = {}, info = {} } = props.data ?? {}
  const { colors = [], sizes = [] } = attr
  const { rating = 0 } = info

  const showFn = () => setShow(true)
  const closeFn = () => setShow(false)

  return (
    <>
      <div className={styles.ProductCard}>
        <div className={styles.ProductCard_ImageCont} onClick={showFn}>
          <img className={styles.ProductCard_Image} src="/prod1_grey3.jpg" />
        </div>
        <div className={styles.ProductCard_Content}>
          <div className={styles.ProductCard_Heading} onClick={showFn}>
            <div className={styles.ProductCard_Heading_Title}>{name}</div>
            <div className={styles.ProductCard_Heading_Price}>
              <CardPrice price={price} oriPrice={oriPrice} />
            </div>
          </div>
          <div className={styles.ProductCard_Option}>
            <ColorOptions selected={color} onSelect={(item) => setColor(item)} options={colors} />
            <SizeOptions selected={size} onSelect={(item) => setSize(item)} options={sizes} />
          </div>
          <div className={styles.ProductCard_Footer} onClick={showFn}>
            <div className={styles.ProductCard_Footer_Rating}>
              <FontAwesomeIcon className={styles.ProductCard_Footer_Rating_Icon} icon={faStar} />
              {rating}
            </div>
            <div className={styles.ProductCard_Footer_Buy}>
              BUY
              <FontAwesomeIcon className={styles.ProductCard_Footer_Buy_Icon} icon={faPlus} />
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={closeFn}
        size="xl"
        contentClassName={styles.ProductModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ProductModal data={props.data} />
      </Modal>
    </>
  )
}

export default ProductCard
