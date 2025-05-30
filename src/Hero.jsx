import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            vitae blanditiis? Suscipit enim, magni veritatis, doloribus minus
            cumque ullam eaque fuga delectus, asperiores nemo corrupti sed culpa
            dolore aspernatur voluptates.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
