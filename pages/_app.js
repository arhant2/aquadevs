import '../styles/globals.css';
import '../styles/variables.css';

import Main from '../components/Main/Main';

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
