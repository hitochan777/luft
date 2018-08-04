import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import MenuImage from '../assets/img/menu.jpg'
import ConceptImage from '../assets/img/concept.jpg'
import StylistImage from '../assets/img/stylist.jpg'
import InfoImage from '../assets/img/info.jpg'

import Jumbotron from '../components/Jumbotron'
import Table from '../components/Table'
import Button from '../components/Button'
import BlogPosts from '../components/BlogPosts'

import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <Jumbotron />
    <section className="container-fluid mb-5 mt-5">
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
        <div className={'row justify-content-center mb-5'}>
          <div className={'col-12 col-lg-6 ' + styles.sectionHeader__text}>
            <h1>What's Luft?</h1>
          </div>
        </div>
      </ScrollAnimation>
      <nav className={styles.imageNav}>
        <div className="row justify-content-center">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            className={'col-12 col-lg-3 mb-3 ' + styles.imageNav__item}
            animateOnce={true}
          >
            <img src={ConceptImage} className="w-100" />
            <h3 className={styles.imageNav__text}>Concept</h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            className={'col-12 col-lg-3 mb-3 ' + styles.imageNav__item}
            animateOnce={true}
          >
            <img src={StylistImage} className="w-100" />
            <h3 className={styles.imageNav__text}>Stylist</h3>
          </ScrollAnimation>
        </div>
        <div className="row justify-content-center">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            className={'col-12 col-lg-3 mb-3 ' + styles.imageNav__item}
            animateOnce={true}
          >
            <img src={MenuImage} className="w-100" />
            <h3 className={styles.imageNav__text}>Menu</h3>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            className={'col-12 col-lg-3 mb-3 ' + styles.imageNav__item}
            animateOnce={true}
          >
            <img src={InfoImage} className="w-100" />
            <h3 className={styles.imageNav__text}>Info</h3>
          </ScrollAnimation>
        </div>
      </nav>
    </section>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
      <BlogPosts />
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
      <section className="container-fluid mb-5 mt-5">
        <div className={'row justify-content-center mb-5'}>
          <div className={'col-12 col-lg-6 ' + styles.sectionHeader__text}>
            <h1>Shop Information</h1>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-3">
            <Table
              list={[
                { key: '営業時間', value: '火～日・祝　9：00～19：00' },
                { key: '定休日', value: '毎週月曜日、第2・3火曜日' },
                { key: '駐車場', value: '2台あり' },
                { key: '住所', value: '兵庫県豊岡市若松町７‐４' },
              ]}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.186222723647!2d134.81301481571583!3d35.54910278022534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fffc43e1396ea11%3A0x535fd767914f80fe!2z772I772B772J772S77ys772V772G772U!5e0!3m2!1sen!2sjp!4v1527418838679`}
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: '0' }}
            className="col-12"
            allowFullScreen
          />
        </div>
      </section>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
      <section className={styles.contact}>
        <img className={styles.contact__image} src={MenuImage} />
        <div className={'container-fluid ' + styles.contact__text}>
          <div className="row justify-content-center my-2">
            <div className="col-8 col-lg-2 text-center">Tel: xxx-yyy-zzzz</div>
          </div>
          <div className="row justify-content-center my-2">
            <div className="col-8 col-lg-2">
              <Button>Contact</Button>
            </div>
          </div>
          <div className="row justify-content-center my-2">
            <div className="col-8 col-lg-2">
              <Button>Access</Button>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  </div>
)

export default IndexPage
