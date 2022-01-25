import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
    </>
  )
}

export default MyApp
