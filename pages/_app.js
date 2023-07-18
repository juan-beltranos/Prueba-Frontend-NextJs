//Redux
import { Provider } from 'react-redux'
import store from '../redux/store';

// CSS
import '../css/bootstrap.min.css';
import '../css/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
