import '../styles/globals.css';
import '@fontsource/poppins';
import { Provider } from 'next-auth/client';
import { CartProvider, useCart } from 'react-use-cart';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </CartProvider>
  );
}

export default MyApp;
