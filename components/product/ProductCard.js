import { useState } from "react"
import { Modal, Button } from "react-bootstrap"

import CardPrice from "./CardPrice"
import ColorOptions from "./ColorOptions"
import SizeOptions from "./SizeOptions"
import ProductModal from "./ProductModal"

import styles from "./ProductCard.module.scss"

const ProductCard = (props) => {
  const [show, setShow] = useState(false)

  const { name = "", price = 0, oriPrice = 0, attr = {} } = props.data ?? {}
  const { colors = [], sizes = [] } = attr

  const showFn = () => setShow(true)
  const closeFn = () => setShow(false)

  return (
    <>
      <div className={styles.ProductCard} onClick={showFn}>
        <div className={styles.ProductCard_ImageCont}>
          <img className={styles.ProductCard_Image} src="/prod1_grey3.jpg" />
        </div>
        <div className={styles.ProductCard_Content}>
          <div className={styles.ProductCard_Heading}>
            <div className={styles.ProductCard_Heading_Title}>{name}</div>
            <div className={styles.ProductCard_Heading_Price}>
              <CardPrice price={price} oriPrice={oriPrice} />
            </div>
          </div>
          <div className={styles.ProductCard_Option}>
            <ColorOptions options={colors} />
            <SizeOptions options={sizes} />
          </div>
          <div className={styles.ProductCard_Footer}>
            <div>Rating</div>
            <div>Buy</div>
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
