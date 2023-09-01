import blogImage1 from '../assets/images/blog_1.jpg';
import blogImage2 from '../assets/images/blog_2.jpg';
import blogImage3 from '../assets/images/blog_3.jpg';

function Blog() {
  return (
    <>
      <h2 className="heading">Nuestro Blog</h2>

      <div className="blog__contenedor blog__grid blog__grid--pagina">
        <article className="entrada">
          <img className="entrada__imagen" src={blogImage1} alt="imagen blog" />

          <div className="entrada__contenido">
            <h3 className="entrada__titulo">¿Como elegir tu primer guitarra?</h3>
            <p className="entrada__fecha">22 de Enero de 2023</p>
            <p className="entrada__texto">La elección de tu primera guitarra es un paso esencial en tu viaje musical. Considera tus preferencias de género, el tamaño adecuado para tu comodidad y un presupuesto razonable. Escucha su sonido y siente su tacto; que ambos te inspiren. Con nuestra experiencia y variedad, te guiamos hacia la perfecta melodía inicial.</p>

            <a className="entrada__enlace" href="entrada.html">Leer Entrada</a>
          </div>
        </article>

        <article className="entrada">
          <img className="entrada__imagen" src={blogImage2} alt="imagen blog" />

          <div className="entrada__contenido">
            <h3 className="entrada__titulo">¿El genero musical es determinante en la eleccion de la guitarra?</h3>
            <p className="entrada__fecha">02 de Abril de 2023</p>
            <p className="entrada__texto">El género musical puede influir en la elección de una guitarra, pero no es el único factor. Si bien ciertos estilos requieren características sonoras específicas, es la conexión personal y el confort lo que verdaderamente importa. Sin embargo, alinear tu instrumento con tu género favorito puede potenciar tu expresión y técnica, creando una sinergia perfecta entre músico y guitarra.</p>

            <a className="entrada__enlace" href="entrada.html">Leer Entrada</a>
          </div>
        </article>

        <article className="entrada">
          <img className="entrada__imagen" src={blogImage3} alt="imagen blog" />

          <div className="entrada__contenido">
            <h3 className="entrada__titulo">¿Es el precio garantia en la calidad de la guitarra?</h3>
            <p className="entrada__fecha">15 de Agosto de 2023</p>
            <p className="entrada__texto">El precio de una guitarra puede reflejar ciertos aspectos de su calidad, como materiales y mano de obra. Sin embargo, un precio elevado no garantiza automáticamente superioridad, ni un precio bajo implica inferioridad. A menudo, marcas reconocidas y artesanos expertos tienen tarifas más altas debido a su reputación y experiencia. Es esencial investigar, probar y escuchar antes de decidir, ya que, en muchos casos, guitarras asequibles ofrecen un rendimiento excepcional para su valor.</p>

            <a className="entrada__enlace" href="entrada.html">Leer Entrada</a>
          </div>
        </article>
      </div>
    </>
  );
}

export default Blog;