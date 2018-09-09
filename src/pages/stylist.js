import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import Content from '../components/SubPage'
import StylistDescItem from '../components/StylistDescItem'
import Image1 from '../assets/img/slide1.jpg'
import Image2 from '../assets/img/slide2.jpg'

const StylistDescription = styled.div`
  text-align: center;
`

const StylistName = ({ name, experienceYears }) => (
  <span>
    {name} (美容師歴{experienceYears}年 )
  </span>
)

const Stylist = () => (
  <Content title="Stylist">
    <Container>
      <Row>
        <Col>
          <StylistDescription>
            Stylist①<br />
            <StylistName name="ATSUSHI" experienceYears={25} />
            <StylistDescItem title="趣味">スノボー、ゴルフ</StylistDescItem>
            <StylistDescItem title="好きな言葉">
              なんとか、なるって
            </StylistDescItem>
            <StylistDescItem title="好きな食べ物">焼肉</StylistDescItem>
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
            <StylistName name="YUKA" experienceYears={18} />
            <StylistDescItem title="趣味">スノボー、ゴルフ</StylistDescItem>
            <StylistDescItem title="好きな言葉">一期一会</StylistDescItem>
            <StylistDescItem title="好きな食べ物">パンケーキ</StylistDescItem>
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
