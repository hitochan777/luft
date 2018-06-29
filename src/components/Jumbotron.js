import React from 'react'

import SlideImage1 from '../assets/img/slide1.jpg'
import SlideImage2 from '../assets/img/slide2.jpg'
import SlideImage3 from '../assets/img/slide3.jpg'
import SlideImage4 from '../assets/img/slide4.jpg'

import styles from './Jumbotron.module.scss'

const Jumbotron = () => (
  <div
    id="carousel"
    className="carousel slide justify-content-center"
    data-ride="carousel"
  >
    <ul className="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" className="active" />
      <li data-target="#carousel" data-slide-to="1" />
      <li data-target="#carousel" data-slide-to="2" />
      <li data-target="#carousel" data-slide-to="3" />
    </ul>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={SlideImage1} className={styles.jumbotron__image} />
      </div>
      <div className="carousel-item">
        <img src={SlideImage2} className={styles.jumbotron__image} />
      </div>
      <div className="carousel-item">
        <img src={SlideImage3} className={styles.jumbotron__image} />
      </div>
      <div className="carousel-item">
        <img src={SlideImage4} className={styles.jumbotron__image} />
      </div>
    </div>

    <a className="carousel-control-prev" href="#carousel" data-slide="prev">
      <span className="carousel-control-prev-icon" />
    </a>
    <a className="carousel-control-next" href="#carousel" data-slide="next">
      <span className="carousel-control-next-icon" />
    </a>
  </div>
)

export default Jumbotron
