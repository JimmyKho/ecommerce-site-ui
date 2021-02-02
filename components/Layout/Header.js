import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"

import { useSelector, useDispatch } from "react-redux"

import styles from "./Header.module.scss"

const Header = () => {
  const cartCount = useSelector((state) => state.cartCount)

  const dispatch = useDispatch()

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    })
  }

  return (
    <>
      <div className={styles.Navigation}>
        <div className={styles.Navigation_Item}>Client Services</div>
        <div className={styles.Navigation_Item}>FAQ</div>
        <div className={styles.Navigation_Item}>About</div>
        <div className={styles.Navigation_Item}>Eng</div>
      </div>
      <div className={styles.Header}>
        <div className={styles.Header_Brand}>Header</div>
        <div className={styles.Header_Search}>
          <FontAwesomeIcon className={styles.Header_Search_Icon} icon={faSearch} />
        </div>

        <div className={styles.Header_Nav}>
          <div className={styles.Header_Nav_Text}>Man's</div>
          <div className={styles.Header_Nav_Text}>Women's</div>
          <FontAwesomeIcon className={styles.Header_Nav_Icon} icon={faHeart} />
          <FontAwesomeIcon className={styles.Header_Nav_Icon} icon={faUser} />

          <div className={styles.Header_Nav_Cart} onClick={clearCart}>
            <FontAwesomeIcon className={styles.Header_Nav_Cart_Icon} icon={faShoppingCart} />
            <div className={styles.Header_Nav_Cart_Text}>Cart ({cartCount})</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
