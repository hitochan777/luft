import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

import Content from '../components/SubPage'
import Layout from '../components/Layout'
import StylistDescItem from '../components/StylistDescItem'
import Image1 from '../assets/img/slide1.jpg'

const StylistDescription = styled.div``

const StylistName = styled.h2`
  text-align: center;
`

const Stylist = styled.div``

const StylistImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

const Info = () => (
  <Layout>
    <Content title="Stylists" id="stylists">
      <Flex justifyContent="center" flexWrap="wrap">
        <Box width={[1, 1 / 3]}>
          <Stylist>
            <StylistImage
              src={Image1}
              alt="Atsushi"
              height="200px"
              width="80%"
              style={{ objectFit: 'cover' }}
            />
            <StylistDescription>
              <StylistName>ATSUSHI</StylistName>
              <StylistDescItem title="美容師歴">25年</StylistDescItem>
              <StylistDescItem title="趣味">スノボー、ゴルフ</StylistDescItem>
              <StylistDescItem title="好きな言葉">
                なんとか、なるって
              </StylistDescItem>
              <StylistDescItem title="好きな食べ物">焼肉</StylistDescItem>
            </StylistDescription>
          </Stylist>
        </Box>
        <Box width={[1, 1 / 3]}>
          <Stylist>
            <StylistImage
              src={Image1}
              alt="Yuka"
              height="200px"
              width="80%"
              style={{ objectFit: 'cover' }}
            />
            <StylistDescription>
              <StylistName>YUKA</StylistName>
              <StylistDescItem title="美容師歴">18年</StylistDescItem>
              <StylistDescItem title="趣味">スノボー、ゴルフ</StylistDescItem>
              <StylistDescItem title="好きな言葉">一期一会</StylistDescItem>
              <StylistDescItem title="好きな食べ物">パンケーキ</StylistDescItem>
            </StylistDescription>
          </Stylist>
        </Box>
      </Flex>
    </Content>

    <Content title="Access" id="access">
      <Flex justifyContent="center" flexWrap="wrap">
        <Box width={[1, 3 / 5]}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.186222727575!2d134.81300945126196!3d35.54910278012832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fffc43e1396ea11%3A0x535fd767914f80fe!2z772I772B772J772S77ys772V772G772U!5e0!3m2!1sen!2sjp!4v1545408396103"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </Box>
        <Box width={[1, 2 / 5]} pl={'30px'}>
          <p>
            【住所】
            <br />
            Hair Luft（ヘアールフト）
            <br />
            兵庫県豊岡市若松町７‐４
          </p>

          <p>
            【情報】
            <br />
            営業時間／ 火～日・祝　9：00～19：00
            <br />
            定休日／ 毎週月曜日、第2・3火曜日
            <br />
            駐車場／２台あり
          </p>
        </Box>
      </Flex>
    </Content>
  </Layout>
)

export default Info
