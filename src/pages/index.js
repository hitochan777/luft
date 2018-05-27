import React from 'react'
import Link from 'gatsby-link'

import TopImage from '../assets/img/top.jpg'
import ContactImage from '../assets/img/contact.jpg'

const IndexPage = () => (
  <div>
    <img src={TopImage} />
    <section>
      <div className="row">
        <h1>Access</h1>
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.186222723647!2d134.81301481571583!3d35.54910278022534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fffc43e1396ea11%3A0x535fd767914f80fe!2z772I772B772J772S77ys772V772G772U!5e0!3m2!1sen!2sjp!4v1527418838679`}
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen
      />
    </section>
    <section>
      <h1>Contact</h1>
      <img src={ContactImage} />
    </section>
  </div>
)

export default IndexPage
