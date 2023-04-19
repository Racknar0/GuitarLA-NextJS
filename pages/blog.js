import Layout from '@/components/layout';
import Post from '@/components/post';
import PropTypes from 'prop-types';
import styles from '@/styles/grid.module.css';

const Blog = ({ posts }) => {
    return (
        <div>
            <Layout title="Blog" description="Blog virtual de guitarras">
                <main className="contenedor">
                    <h1 className="heading">Blog</h1>
                    <div className={styles.grid}>
                        {
                            posts?.map((post) => (
                                <Post key={post.id} post={post.attributes} />
                            ))
                        }
                    </div>
                </main>
            </Layout>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    posts: PropTypes.array.isRequired,
};

export async function getStaticProps() {
    const respuesta = await fetch(
        `${process.env.API_URL}/api/posts/?populate=imagen`
    );
    const { data: posts } = await respuesta.json();

    return {
        props: {
            posts,
        },
    };
}
