import { useState } from "react"
import { Button } from "react-bootstrap"

import ModalPrice from "./ModalPrice"
import ColorOptions from "./ColorOptions"
import SizeOptions from "./SizeOptions"

import styles from "./ProductModal.module.scss"

const ProductModal = (props) => {
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState()
  const [color, setColor] = useState()

  const { name, code, brand, price, oriPrice, discAmount, attr = {}, info = {} } = props.data ?? {}
  const { colors = [], sizes = [] } = attr
  const { rating = 0 } = info

  const addQuantityFn = () => {
    setQuantity(quantity + 1)
  }

  const minusQuantityFn = () => {
    if (quantity - 1 != -1) setQuantity(quantity - 1)
  }

  return (
    <div className={styles.ProductModal}>
      <div className={styles.ProductModal_Image}>
        <div className={styles.ProductModal_Image_Gallery}>
          <img className={styles.ProductModal_Image_Gallery_Item} src="/prod1_grey3.jpg" />
          <img className={styles.ProductModal_Image_Gallery_Item} src="/prod1_grey3.jpg" />
          <img className={styles.ProductModal_Image_Gallery_Item} src="/prod1_grey3.jpg" />
        </div>

        <img className={styles.ProductModal_Image_Preview} src="/prod1_grey3.jpg" />
      </div>
      <div className={styles.ProductModal_Detail}>
        <div className={styles.ProductModal_Detail_Extra}>
          <div className={styles.ProductModal_Detail_Extra_Promo}>- {discAmount}%</div>
          <div className={styles.ProductModal_Detail_Extra_Rating}>{rating}</div>
        </div>
        <div className={styles.ProductModal_Detail_Name}>{name}</div>
        <div className={styles.ProductModal_Detail_Info}>
          <div className={styles.ProductModal_Detail_Info_Title}>SKU</div>
          <div className={styles.ProductModal_Detail_Info_Title___Regular}>{code}</div>
        </div>
        <div className={styles.ProductModal_Detail_Info}>
          <div className={styles.ProductModal_Detail_Info_Title}>Brand</div>
          <div className={styles.ProductModal_Detail_Info_Title___Primary}>{brand}</div>
        </div>

        <div className={styles.ProductModal_Detail_Space} />

        <ModalPrice price={price} oriPrice={oriPrice} />

        <div className={styles.ProductModal_Detail_Space} />

        <div className={styles.ProductModal_Detail_Info}>
          <div className={styles.ProductModal_Detail_Info_Title}>Colors</div>
          <div className={styles.ProductModal_Detail_Info_Title___Regular}>Selected Color</div>
        </div>
        <div className={styles.ProductModal_Detail_Info}>
          <ColorOptions selected={color} onSelect={(item) => setColor(item)} options={colors} large />
        </div>

        <div className={styles.ProductModal_Detail_Space} />

        <div className={styles.ProductModal_Detail_Info}>
          <div className={styles.ProductModal_Detail_Info_Title}>Size</div>
        </div>
        <div className={styles.ProductModal_Detail_Info}>
          <SizeOptions selected={size} onSelect={(item) => setSize(item)} options={sizes} large />
        </div>

        <div className={styles.ProductModal_Detail_Info_Title___Regular}>Size Guide</div>

        <div className={styles.ProductModal_Detail_Space} />

        <div className={styles.ProductModal_Detail_Info}>
          <div className={styles.ProductModal_Detail_Info_Title}>Quantity</div>
        </div>
        <div className={styles.ProductModal_Detail_Quantity}>
          <div className={styles.ProductModal_Detail_Quantity_Amount}>{quantity}</div>
          <div onClick={minusQuantityFn} className={styles.ProductModal_Detail_Quantity_Button}>
            -
          </div>
          <div onClick={addQuantityFn} className={styles.ProductModal_Detail_Quantity_Button}>
            +
          </div>
        </div>

        <div className={styles.ProductModal_Detail_Space} />

        <div className={styles.ProductModal_Detail_Action}>
          <div className={styles.ProductModal_Detail_Action_Favourite}>X</div>
          <div className={styles.ProductModal_Detail_Action_Space} />
          <div className={styles.ProductModal_Detail_Action_Button___Secondary}>Add to cart</div>
          <div className={styles.ProductModal_Detail_Action_Space} />
          <div className={styles.ProductModal_Detail_Action_Button___Primary}>Buy Now</div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

const PRODUCT = {
  name: "Indian Cotton Gauze Shirt",
  code: "4550344324004",
  price: 109,
  discAmount: 20,
  oriPrice: 136.25,
  brand: "MUJI",
  info: {
    rating: 4.3,
  },
  attr: {
    colors: [
      {
        name: "Grey",
        code: "#d8d7d5",
      },
      {
        name: "Brown",
        code: "#a47551",
      },
    ],
    sizes: [
      {
        name: "S",
      },
      {
        name: "M",
      },
      {
        name: "L",
      },
    ],
  },
}
