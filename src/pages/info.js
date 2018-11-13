import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import Content from '../components/SubPage'
import Layout from '../components/Layout'
import StylistDescItem from '../components/StylistDescItem'
import Image1 from '../assets/img/slide1.jpg'

const StylistDescription = styled.div``

const StylistName = ({ name }) => <h2>{name}</h2>

const Stylist = styled.div``

const Info = () => (
  <Layout>
    <Content title="Access" id="access" />
    <Content title="Stylists" id="stylists">
      <Container>
        <Row noGutters={true}>
          <Col sm={6} xs={12}>
            <Stylist>
              <img
                src={Image1}
                height="200px"
                width="80%"
                style={{ objectFit: 'cover' }}
              />
              <StylistDescription>
                <StylistName name="ATSUSHI" />
                <StylistDescItem title="美容師歴">25年</StylistDescItem>
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
                width="80%"
                style={{ objectFit: 'cover' }}
              />
              <StylistDescription>
                <StylistName name="YUKA" />
                <StylistDescItem title="美容師歴">18年</StylistDescItem>
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

export default Info
