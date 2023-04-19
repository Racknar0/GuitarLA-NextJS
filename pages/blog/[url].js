import Layout from '@/components/layout';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from '@/styles/blog.module.css';
import { formatearFecha } from '@/utils/helpers';

const Post = ({ post }) => {
    const { titulo, publishedAt, imagen, contenido } = post[0].attributes;
    return (
        <Layout
            title={titulo}
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image
                    src={imagen.data.attributes.url}
                    alt={titulo}
                    width={1000}
                    height={400}
                />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>
                        {formatearFecha(publishedAt)}
                    </p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
    );
};

export default Post;

Post.propTypes = {
    post: PropTypes.array.isRequired,
};

export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(
        `${process.env.API_URL}/api/posts/?filters[url]=${url}&populate=imagen`
    );
    const { data: post } = await respuesta.json();
    return {
        props: {
            post,
        },
    };
}
