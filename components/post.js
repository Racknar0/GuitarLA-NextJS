import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '@/styles/blog.module.css';
import { formatearFecha } from '@/utils/helpers';

const Post = ({ post }) => {
    const { titulo, publishedAt, imagen, contenido, url } = post;
    return (
        <article>
            <Image
                src={imagen.data.attributes.formats.medium.url}
                alt={titulo}
                width={600}
                height={400}
            />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`} className={styles.enlace}>
                    Ver Post
                </Link>
            </div>
        </article>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;
