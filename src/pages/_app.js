// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';
import '@fontsource/poppins';
import { Provider } from 'next-auth/client';
import { CartProvider } from 'react-use-cart';

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
