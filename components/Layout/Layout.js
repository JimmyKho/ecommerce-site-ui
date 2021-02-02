import Head from "next/head"
import { ToastContainer } from "react-toastify"

import Header from "./Header"
import CategoryList from "./CategoryList"

import styles from "./Layout.module.scss"

const Layout = (props) => (
  <div className={styles.Layout}>
    <Head>
      <title>ECOM</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <ToastContainer />

    <Header />
    <CategoryList />

    <div className={styles.Content}>{props.children}</div>
  </div>
)

export default Layout
