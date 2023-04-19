import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/carrito.module.css';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = carrito.reduce(
            (acc, producto) => acc + producto.cantidad * producto.precio,
            0
        );
        setTotal(total);
    }, [carrito]);

    return (
        <Layout title="Carrito de compras">
            <main className="contenedor">
                <h1>Carrito</h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Artículos</h2>

                        {carrito.length === 0 ? (
                            <p>No hay artículos en el carrito</p>
                        ) : (
                            carrito.map((producto) => (
                                <div
                                    className={styles.producto}
                                    key={producto.id}
                                >
                                    <div>
                                        <Image
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                            width={250}
                                            height={480}
                                        />
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>
                                            {producto.nombre}
                                        </p>

                                        <div className={styles.cantidad}>
                                            <p>Cantidad:</p>
                                            <select
                                                className={styles.select}
                                                onChange={(e) =>
                                                    actualizarCantidad({
                                                        id: producto.id,
                                                        cantidad:
                                                            e.target.value,
                                                    })
                                                }
                                                value={producto.cantidad}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <p className={styles.precio}>
                                            $<span>{producto.precio}</span>
                                        </p>
                                        <p className={styles.subtotal}>
                                            Subtotal: $
                                            <span>
                                                {producto.cantidad *
                                                    producto.precio}
                                            </span>
                                        </p>
                                    </div>
                                    <button
                                        className={styles.eliminar}
                                        type="button"
                                        onClick={() => eliminarProducto(producto.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    );
};

export default Carrito;

Carrito.propTypes = {
    carrito: PropTypes.array.isRequired,
    actualizarCantidad: PropTypes.func.isRequired,
    eliminarProducto: PropTypes.func.isRequired,
};
