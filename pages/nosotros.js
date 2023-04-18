import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/nosotros.module.css';

const Nosotros = () => {
    return (
        <div>
            <Layout
                title="Nosotros"
                description="Esta es la página de Nosotros"
            >
                <div className="contenedor">
                    <h1 className="heading">Nosotros</h1>

                    <div className={styles.contenido}>
                        <Image
                            src="/img/nosotros.jpg"
                            alt="Imagen sobre nosotros"
                            width={1000}
                            height={800}
                        />
                        <div>
                            <p>
                                Bienvenidos a nuestra tienda de guitarras y blog
                                de música. Somos un equipo apasionado por todo
                                lo relacionado con la música, especialmente con
                                la guitarra. Nos enorgullece ofrecer una amplia
                                selección de guitarras de alta calidad y
                                accesorios para todos los niveles de habilidad y
                                presupuestos.
                            </p>
                            <p>
                                En nuestro blog de música, compartimos nuestras
                                experiencias, conocimientos y consejos para
                                ayudarlo a aprender y mejorar su habilidad en la
                                guitarra, así como también información relevante
                                sobre la industria de la música. Nos esforzamos
                                por crear contenido interesante y educativo para
                                todos los músicos, desde principiantes hasta
                                expertos.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Nosotros;
