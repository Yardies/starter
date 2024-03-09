import heroImage from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero-center">
      <div className="hero-title">
        <h2>Contentfull CMS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam a
          eveniet id cumque. Animi facere accusantium ipsa! Distinctio placeat
          consectetur perspiciatis rerum ducimus voluptatem?
        </p>
      </div>
      <div className="img-container">
        <img src={heroImage} className="img" />
      </div>
    </section>
  )
}

export default Hero
