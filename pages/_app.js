import { Provider } from "react-redux"
import { useStore } from "../store"

import "../styles/globals.scss"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
