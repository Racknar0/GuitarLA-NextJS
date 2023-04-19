import '@/styles/globals.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (guitarra) => {
        // Comprobar si la guitarra ya esta en el carrito...
        if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            // Iterar para actualizar la cantidad
            const carritoActualizado = carrito.map((guitarraState) => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad;
                }
                return guitarraState;
            });
            // Se asigna al array
            setCarrito([...carritoActualizado]);
            localStorage.setItem('carrito', JSON.stringify(carrito));
        } else {
            // En caso de que el articulo no exista, es nuevo y se agrega
            setCarrito([...carrito, guitarra]);
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    };

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(
            (producto) => producto.id != id
        );
        setCarrito(carritoActualizado);
        window.localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    const actualizarCantidad = (guitarra) => {
        const carritoActualizado = carrito.map((guitarraState) => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = parseInt(guitarra.cantidad);
            }
            return guitarraState;
        });
        setCarrito(carritoActualizado);
        window.localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    return (
        <Component
            {...pageProps}
            agregarCarrito={agregarCarrito}
            eliminarProducto={eliminarProducto}
            actualizarCantidad={actualizarCantidad}
            carrito={carrito}
            setCarrito={setCarrito}
        />
    );
}

App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
};
