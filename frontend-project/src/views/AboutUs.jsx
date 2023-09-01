import aboutUsImage from '../assets/images/nosotros.jpg';

function AboutUs() {
  return (
    <>
      <h2 className="nosotros__heading">Nosotros</h2>
      <div className="nosotros__grid">
        <img src={aboutUsImage} alt="imagen nosotros" />
        <div className="nosotros__contenido">
          <p>Desde hace 30 años, somos la elección predilecta de apasionados de la guitarra. Con una trayectoria inquebrantable, no solo ofrecemos instrumentos de calidad, sino que respaldamos cada compra con nuestra garantía integral. Nos enorgullece ser parte de tu viaje musical, brindándote confianza y excelencia en cada nota.</p>
          <p>En nuestro catálogo, la variedad y calidad son protagonistas. Desde guitarras acústicas suaves hasta eléctricas resonantes, nuestra amplia selección satisface a novatos y profesionales por igual. Con un stock siempre renovado y la más extensa gama de accesorios, garantizamos encontrarás el complemento perfecto para tu pasión musical.</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;