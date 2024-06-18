import '../../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/scss/_main.scss';
import dynamic from 'next/dynamic';
import { AuthProvider } from '_contexts/auth';

const Layout = dynamic(() => import('../components/Layouts/Layout'));

function MyApp({ Component, pageProps }) {

  return (
    <>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

export default MyApp
