import React from 'react'
import injectSheet from 'react-jss'

import Table from '../components/Table'
import TopImage from '../assets/img/top.jpg'
import MenuImage from '../assets/img/menu.jpg'
import ConceptImage from '../assets/img/concept.jpg'

const styles = {
  sectionHeader: {
    display: 'flex',
    marginBottom: '50px',
  },
  sectionHeader__text: {
    borderBottom: '1px solid black',
    textAlign: 'right',
    flex: '0 0 25%',
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '80%',
    marginLeft: '10%',
  },
  contact: {
    backgroundImage: `url(${TopImage})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '500px',
  },
  imageNav: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '60px',
  },
  imageNav__item: {
    flex: '0 0 25%',
    position: 'relative',
  },
  jumbotron: {
    position: 'relative',
  },
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    margin: 0,
    padding: 0,
  },
}

const IndexPage = ({ classes }) => (
  <div>
    <div className={classes.jumbotron}>
      <img src={TopImage} width="100%" />
      <p
        className={classes.centered}
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '3vw',
          fontFamily: 'Quicksand, sans-serif',
        }}
      >
        Long<br />User <br />Future <br />Together<br />
      </p>
    </div>
    <nav className={classes.imageNav}>
      <div className={classes.imageNav__item}>
        <img src={MenuImage} width="100%" />
        <p
          className={classes.centered}
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '3vw',
            fontFamily: 'Quicksand, sans-serif',
          }}
        >
          Concept
        </p>
      </div>
      <div className={classes.imageNav__item}>
        <img src={ConceptImage} width="100%" />
      </div>
      <div className={classes.imageNav__item}>
        <img src={MenuImage} width="100%" />
        <p
          className={classes.centered}
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '3vw',
            fontFamily: 'Quicksand, sans-serif',
          }}
        >
          Menu
        </p>
      </div>
      <div className={classes.imageNav__item}>
        <img src={ConceptImage} width="100%" />
      </div>
      <div className={classes.imageNav__item}>
        <img src={MenuImage} width="100%" />
      </div>
      <div className={classes.imageNav__item}>
        <img src={ConceptImage} width="100%" />
        <p
          className={classes.centered}
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '3vw',
            fontFamily: 'Quicksand, sans-serif',
          }}
        >
          Info
        </p>
      </div>
      <div className={classes.imageNav__item}>
        <img src={MenuImage} width="100%" />
      </div>
      <div className={classes.imageNav__item}>
        <img src={ConceptImage} width="100%" />
        <p
          className={classes.centered}
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '3em',
            fontFamily: 'Quicksand, sans-serif',
          }}
        >
          Contact
        </p>
      </div>
    </nav>
    <section>
      <div className={classes.sectionHeader}>
        <div className={classes.sectionHeader__text}>
          <h1>Access</h1>
        </div>
      </div>
      <div className={classes.sectionContent}>
        <div style={{ flex: '0 0 50%' }}>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.186222723647!2d134.81301481571583!3d35.54910278022534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fffc43e1396ea11%3A0x535fd767914f80fe!2z772I772B772J772S77ys772V772G772U!5e0!3m2!1sen!2sjp!4v1527418838679`}
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
          />
        </div>
        <p style={{ flex: '0 0 50%' }}>
          Hair Luft（ヘアールフト）<br /> 兵庫県豊岡市若松町７‐４
        </p>
      </div>
    </section>
    <section>
      <div className={classes.sectionHeader}>
        <div className={classes.sectionHeader__text}>
          <h1>Info</h1>
        </div>
      </div>
      <p className={classes.sectionContent}>
        <Table
          list={[
            { key: '営業時間', value: '火～日・祝　9：00～19：00' },
            { key: '定休日', value: '毎週月曜日、第2・3火曜日' },
            { key: '駐車場', value: '2台あり' },
          ]}
        />
      </p>
    </section>

    <section className={classes.contact} />
  </div>
)

export default injectSheet(styles)(IndexPage)
