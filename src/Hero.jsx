import { useState } from 'react'
import heroImage from './assets/hero.svg'
import { useFetchHeroText } from './fetchProjects'

const Hero = () => {
  const { text } = useFetchHeroText()

  return (
    <section className="hero-center">
      <div className="hero-title">
        <h2>Contentfull CMS</h2>
        <p>{text}</p>
      </div>
      <div className="img-container">
        <img src={heroImage} className="img" />
      </div>
    </section>
  )
}

export default Hero
