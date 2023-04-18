import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/blog">Blog</Link>
                </nav>
                <p className={styles.copyrigth}>
                    &copy; {new Date().getFullYear()} - Todos los derechos
                    reservados
                </p>
            </div>
        </footer>
    );
};

export default Footer;
