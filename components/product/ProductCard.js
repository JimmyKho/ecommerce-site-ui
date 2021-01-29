import { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faStar, faHeart } from "@fortawesome/free-regular-svg-icons"

import CardPrice from "./CardPrice"
import ColorOptions from "./ColorOptions"
import SizeOptions from "./SizeOptions"
import ProductModal from "./ProductModal"

import styles from "./ProductCard.module.scss"

const ProductCard = (props) => {
  const [show, setShow] = useState(false)
  const [size, setSize] = useState()
  const [color, setColor] = useState()
  const [fav, setFav] = useState(false)
  const [preview, setPreview] = useState()

  const { name = "", price = 0, oriPrice = 0, discAmount = 0, attr = {}, info = {}, image = "" } = props.data ?? {}
  const { colors = [], sizes = [] } = attr
  const { rating = 0 } = info

  const showFn = () => setShow(true)
  const closeFn = () => setShow(false)

  const setFavFn = () => {
    setFav(!fav)
  }

  var favStyle = styles.ProductCard_Info_Favourite_Icon

  if (fav) favStyle += " " + styles.ProductCard_Info_Favourite_Icon___Active

  useEffect(() => {
    if (color) {
      colors.map((item) => {
        if (item.name == color) setPreview(item.images[0])
      })
    } else {
      setPreview(image)
    }
  }, [color])

  return (
    <>
      <div className={styles.ProductCard}>
        <div className={styles.ProductCard_Info}>
          <div className={styles.ProductCard_Info_Promo}>- {discAmount}%</div>
          <div className={styles.ProductCard_Info_Favourite} onClick={setFavFn}>
            <FontAwesomeIcon className={favStyle} icon={faHeart} />
          </div>
        </div>
        <div className={styles.ProductCard_ImageCont} onClick={showFn}>
          <img className={styles.ProductCard_Image} src={preview} />
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
        <ProductModal data={props.data} closeFn={closeFn} />
      </Modal>
    </>
  )
}

export default ProductCard
