import PropTypes from 'prop-types';
import Layout from '@/components/layout';
import Guitarra from '@/components/guitarra';
import styles from '@/styles/grid.module.css';

const Tienda = ({ guitarras }) => {

    return (
        <div>
            <Layout title="Tienda" description="Tienda virtual de guitarras">
                <main className="contenedor">
                    <h1 className="heading">Nuestra Colección</h1>
                    <div className={styles.grid}>
                        {
                            guitarras?.map((guitarra) => (
                                <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
                            ))
                        }
                    </div>
                </main>
            </Layout>
        </div>
    );
};

export default Tienda;

// getStaticProps() Sirve para generar páginas estáticas en tiempo de compilación (build time) y no en tiempo de ejecución (request time). Esto significa que el HTML se genera en el momento de la compilación y se sirve desde el servidor de forma estática. Esto es ideal para páginas que no cambian con frecuencia, como páginas de producto, documentación o páginas de blog.

export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras/?populate=imagen`);
    const { data: guitarras } = await respuesta.json();

    return {
        props: {
            guitarras,
        },
    };
}

Tienda.propTypes = {
    guitarras: PropTypes.array.isRequired,
};


// getServerSideProps() Sirve para generar páginas estáticas en tiempo de ejecución (request time). Esto significa que el HTML se genera en el momento de la petición y se sirve desde el servidor de forma estática. Esto es ideal para páginas que cambian con frecuencia, como páginas de producto, documentación o páginas de blog.

/* export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras/?populate=imagen`);
    const { data: guitarras } = await respuesta.json();

    return {
        props: {
            guitarras,
        },
    };
} */
