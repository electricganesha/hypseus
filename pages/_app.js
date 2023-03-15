import '../styles/globals.css';
import GoogleTag from '../components/GoogleTag';

function MyApp({ Component, pageProps }) {
  return  <>
            <Component {...pageProps} />
            <GoogleTag />
          </>
}

export default MyApp
