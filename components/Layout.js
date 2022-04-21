import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;