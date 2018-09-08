import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import Content from '../components/SubPage'

import Image1 from '../assets/img/slide1.jpg'
import Image2 from '../assets/img/slide2.jpg'

const StylistDescription = styled.div`
  text-align: center;
`

const Stylist = () => (
  <Content title="Stylist">
    <Container>
      <Row>
        <Col>
          <StylistDescription>
            Stylist①<br />
            ATSUSHI (美容師歴 25年)<br /> 趣味<br />
            スノボー、ゴルフ<br />
            好きな言葉<br />
            なんとか、なるって<br />
            好きな食べ物<br />
            焼肉<br />
          </StylistDescription>
        </Col>
        <Col>
          <img
            src={Image1}
            height="200px"
            width="100%"
            style={{ objectFit: 'cover' }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <StylistDescription>
            Stylist②<br />
            YUKA (美容師歴 18年)<br />
            趣味<br />
            スノボー、ゴルフ<br />
            好きな言葉<br />
            一期一会<br />
            好きな食べ物<br />
            パンケーキ<br />
          </StylistDescription>
        </Col>
        <Col>
          <img
            src={Image1}
            height="200px"
            width="100%"
            style={{ objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
  </Content>
)

export default Stylist
