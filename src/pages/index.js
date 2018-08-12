import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Link from 'gatsby-link'

import MenuImage from '../assets/img/menu.png'
import ConceptImage from '../assets/img/concept.png'
import StylistImage from '../assets/img/stylist.png'
import InfoImage from '../assets/img/info.png'
import Logo from '../assets/img/logo.png'

import Jumbotron from '../components/Jumbotron'
import Table from '../components/Table'
import Button from '../components/Button'
import BlogPosts from '../components/BlogPosts'
import SectionTitle from '../components/SectionTitle'

import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <Jumbotron />
    <section className="container-fluid mb-5 mt-5">
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <SectionTitle>What's Luft?</SectionTitle>
      </ScrollAnimation>
      <nav className={styles.imageNav}>
        <div className="row justify-content-center">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            animateOnce={true}
            className="col-12 col-lg-3 mb-3"
          >
            <img
              src={ConceptImage}
              className={'w100 ' + styles.imageNav__item}
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            animateOnce={true}
            className="col-12 col-lg-3 mb-3"
          >
            <img
              src={StylistImage}
              className={'w100 ' + styles.imageNav__item}
            />
          </ScrollAnimation>
        </div>
        <div className="row justify-content-center">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            animateOnce={true}
            className="col-12 col-lg-3 mb-3"
          >
            <img src={MenuImage} className={'w100 ' + styles.imageNav__item} />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            animateOnce={true}
            className="col-12 col-lg-3 mb-3"
          >
            <img src={InfoImage} className={'w100 ' + styles.imageNav__item} />
          </ScrollAnimation>
        </div>
      </nav>
    </section>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
      <section className="container-fluid mb-5 mt-5">
        <SectionTitle>Information</SectionTitle>
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-6">
            <BlogPosts limit={5} />
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <Link to="/blog">
            <button
              style={{
                border: 'none',
                width: '200px',
                height: '50px',
                backgroundColor: 'brown',
                color: 'white',
              }}
            >
              ▶&nbsp;&nbsp;More News
            </button>
          </Link>
        </div>
      </section>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
      <section className="container-fluid mb-5 mt-5">
        <SectionTitle>Shop Information</SectionTitle>
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-7">
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-lg-6">
                <img src={Logo} />
                <br />
                〒668-0027 兵庫県豊岡市若松町7-4<br />
                TEL: 0796-23-2123 <hr />
                営業時間: 火～日・祝　9：00～19：00<br />
                定休日: 毎週月曜日、第2・3火曜日<br />
                駐車場: 2台あり
              </div>
              <div className="col-12 col-lg-6">
                <img src={MenuImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.186222723647!2d134.81301481571583!3d35.54910278022534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fffc43e1396ea11%3A0x535fd767914f80fe!2z772I772B772J772S77ys772V772G772U!5e0!3m2!1sen!2sjp!4v1527418838679`}
        frameBorder="0"
        className={styles.map}
        allowFullScreen
      />
    </ScrollAnimation>
  </div>
)

export default IndexPage
