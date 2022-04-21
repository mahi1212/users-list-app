import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

Layout.defaultProps = {
    title: 'Mahinur Rahman'
}