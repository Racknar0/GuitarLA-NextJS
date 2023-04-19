import Layout from '@/components/layout';
import Link from 'next/link';

const Pagina404 = () => {
    return (
        <Layout title="Pagina no encontrada">
            <p className="error">No se ha encontrado la página</p>
            <Link className="error-enlace" href="/">
                Volver al inicio
            </Link>
        </Layout>
    );
};

export default Pagina404;
