import Guitarra from '@/components/guitarra';
import Layout from '@/components/layout';
import Post from '@/components/post';
import Curso from '@/components/curso';
import PropTypes from 'prop-types';
import styles from '@/styles/grid.module.css';


export default function Home({ guitarras, posts, curso }) {


    return (
        <>
            <Layout
                title="Inicio"
                description="Blog de música y venta de guitarras"
            >
                <main className="contenedor">
                    <h1 className="heading">Nuestra coleccion</h1>
                </main>
                <div className={styles.grid}>
                    {guitarras?.map((guitarra) => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>

                <Curso curso={curso.attributes} />

                <section>
                    <h2 className="heading">Blog</h2>
                    <div className={styles.grid}>
                        {posts?.map((post) => (
                            <Post key={post.id} post={post.attributes} />
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    );
}

Home.propTypes = {
    guitarras: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    curso: PropTypes.object.isRequired,
};

export async function getStaticProps() {
    const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=imagen`;
    const urlPost = `${process.env.API_URL}/api/posts?populate=imagen`;
    const urlCurso = `${process.env.API_URL}/api/curso?populate=imagen`;

    const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
        fetch(urlGuitarras).then((res) => res.json()),
        fetch(urlPost).then((res) => res.json()),
        fetch(urlCurso).then((res) => res.json()),
    ]);

    return {
        props: {
            posts,
            guitarras,
            curso,
        },
    };
}
