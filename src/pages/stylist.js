import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import Content from '../components/SubPage'
import Layout from '../components/Layout'
import StylistDescItem from '../components/StylistDescItem'
import Image1 from '../assets/img/slide1.jpg'
import Image2 from '../assets/img/slide2.jpg'

const StylistDescription = styled.div`
  text-align: center;
`

const StylistName = ({ name, experienceYears }) => (
  <span>
    <h2>{name}</h2> (美容師歴
    {experienceYears}年 )
  </span>
)

const Stylist = styled.div``

const Stylists = () => (
  <Layout>
    <Content title="Stylist">
      <Container>
        <Row>
          <Col sm={6} xs={12}>
            <Stylist>
              <img
                src={Image1}
                height="200px"
                width="100%"
                style={{ objectFit: 'cover' }}
              />
              <StylistDescription>
                <StylistName name="ATSUSHI" experienceYears={25} />
                <StylistDescItem title="趣味">スノボー、ゴルフ</StylistDescItem>
                <StylistDescItem title="好きな言葉">
                  なんとか、なるって
                </StylistDescItem>
                <StylistDescItem title="好きな食べ物">焼肉</StylistDescItem>
              </StylistDescription>
            </Stylist>
          </Col>
          <Col sm={6} xs={12}>
            <Stylist>
              <img
                src={Image1}
                height="200px"
                width="100%"
                style={{ objectFit: 'cover' }}
              />
              <StylistDescription>
                <StylistName name="YUKA" experienceYears={18} />
                <StylistDescItem title="趣味">スノボー、ゴルフ</StylistDescItem>
                <StylistDescItem title="好きな言葉">一期一会</StylistDescItem>
                <StylistDescItem title="好きな食べ物">
                  パンケーキ
                </StylistDescItem>
              </StylistDescription>
            </Stylist>
          </Col>
        </Row>
      </Container>
    </Content>
  </Layout>
)

export default Stylists
