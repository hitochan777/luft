import React from 'react'

import TopImage from '../assets/img/top.jpg'
import MenuImage from '../assets/img/menu.jpg'
import ConceptImage from '../assets/img/concept.jpg'

import Table from '../components/Table'
import Button from '../components/Button'
import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <div className={styles.jumbotron + ' ' + styles.fadeIn}>
      <img src={TopImage} className={styles.jumbotron__image} />
      <p className={styles.jumbotron__text}>
        Long<br />User <br />Future <br />Together<br />
      </p>
    </div>
    <nav className={'container-fluid ' + styles.imageNav}>
      <div className="row">
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={MenuImage} className="w-100" />
          <p className={styles.imageNav__text}>Concept</p>
        </div>
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={ConceptImage} className="w-100" />
        </div>
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={MenuImage} className="w-100" />
          <p className={styles.imageNav__text}>Menu</p>
        </div>
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={ConceptImage} className="w-100" />
        </div>
      </div>
      <div className="row">
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={MenuImage} className="w-100" />
        </div>
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={ConceptImage} className="w-100" />
          <p className={styles.imageNav__text}>Info</p>
        </div>
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={MenuImage} className="w-100" />
        </div>
        <div className={'col-6 col-md-3 ' + styles.imageNav__item}>
          <img src={ConceptImage} className="w-100" />
          <p className={styles.imageNav__text}>Contact</p>
        </div>
      </div>
    </nav>
    <section>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeader__text}>
          <h1>Access</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.186222723647!2d134.81301481571583!3d35.54910278022534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fffc43e1396ea11%3A0x535fd767914f80fe!2z772I772B772J772S77ys772V772G772U!5e0!3m2!1sen!2sjp!4v1527418838679`}
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: '0' }}
            className="col-12 col-md-5"
            allowFullScreen
          />
          <p className="col-12 col-md-5">
            Hair Luft（ヘアールフト）<br /> 兵庫県豊岡市若松町７‐４
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeader__text}>
          <h1>Info</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Table
              list={[
                { key: '営業時間', value: '火～日・祝　9：00～19：00' },
                { key: '定休日', value: '毎週月曜日、第2・3火曜日' },
                { key: '駐車場', value: '2台あり' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>

    <section className={styles.contact}>
      <img className={styles.contact__image} src={TopImage} />
      <div className={'container-fluid ' + styles.contact__text}>
        <div className="row justify-content-center my-2">
          <div className="col-2 text-center">Tel: xxx-yyy-zzzz</div>
        </div>
        <div className="row justify-content-center my-2">
          <div className="col-2">
            <Button>Contact</Button>
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <div className="col-2">
            <Button>Access</Button>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
