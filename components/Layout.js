import Header from "./Header"
import Head from "next/head"

import styles from "./Layout.module.scss"

const Layout = (props) => (
  <div className={styles.Layout}>
    <Head>
      <title>ECOM</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />

    <div className={styles.Content}>{props.children}</div>
  </div>
)

export default Layout
