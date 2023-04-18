import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import PropTypes from 'prop-types';

export default function Layout({ children, title = '', description = '' }) {
    return (
        <>
            <Head>
                <title>{`${title} | Next.js`}</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
};
