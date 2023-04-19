import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '@/styles/guitarras.module.css';
import Layout from '@/components/layout';
import { useState } from 'react';

const Producto = ({ guitarra, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(0);
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

    const handleSubmit = (e) => {
        e.preventDefault();

        cantidad < 1 && alert('Seleccione una cantidad');

        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad,
        };
        
        agregarCarrito(guitarraSeleccionada);

    };

    return (
        <Layout title={nombre} description={descripcion}>
            <div className={styles.guitarra}>
                <Image
                    src={imagen.data.attributes.url}
                    alt={`${nombre} ${descripcion}`}
                    width={600}
                    height={400}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <form className={styles.formulario}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select
                            id="cantidad"
                            value={cantidad}
                            onChange={(e) => setCantidad(+e.target.value)}
                        >
                            <option value="0">Seleccione</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <button type="submit" onClick={handleSubmit}>
                            Agregar al carrito
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Producto;

// Validación de props
Producto.propTypes = {
    guitarra: PropTypes.array.isRequired,
    agregarCarrito: PropTypes.func.isRequired,
};

// getStaticPaths Se utiliza para generar páginas estáticas dinámicas en tiempo de compilación (build time) y no en tiempo de ejecución (request time)
export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras`); // Aca se obtienen las urls de las guitarras
    const { data } = await respuesta.json(); // Aca se obtienen los datos de las guitarras

    const paths = data.map((guitarra) => ({
        // Aca se obtienen las urls de las guitarras
        params: { variable: guitarra.attributes.url },
    }));
    return {
        paths,
        fallback: false, // Aca se indica que si no encuentra la url, muestre un error 404
    };
}

// getStaticProps
export async function getStaticProps({ params: { variable } }) {
    // Aca se obtiene la url de la guitarra

    const respuesta = await fetch(
        `${process.env.API_URL}/api/guitarras/?filters[url]=${variable}&populate=imagen` // Aca se obtiene la guitarra
    );
    const { data: guitarra } = await respuesta.json();

    return {
        props: {
            // Aca se envia la guitarra al componente
            guitarra,
        },
    };
}

// GetServerSideProps
/* export async function getServerSideProps({ query: { variable } }) {
    console.log(variable);

    const respuesta = await fetch( `${process.env.API_URL}/api/guitarras/?filters[url]=${variable}&populate=imagen` );
    const { data: guitarra } = await respuesta.json();

    return {
        props: {
            guitarra,
        },
    };
} */
