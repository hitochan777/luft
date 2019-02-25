import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

import Content from '../components/template/SubPage'
import Layout from '../components/template/Layout'
import StylistDescItem from '../components/molecule/StylistDescItem'

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

const Info = ({ data }) => (
  <Layout>
    <Content title="Stylists" id="stylists">
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        <Box width={[1, 1 / 3]}>
          <Stylist>
            <StylistImage
              src={data.stylist_atsushi.file.url}
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
        <Box width={[1, 1, 1 / 3]}>
          <Stylist>
            <StylistImage
              src={data.stylist_yuka.file.url}
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
  </Layout>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        stylist_atsushi: contentfulAsset(title: { eq: "stylist_atsushi" }) {
          title
          file {
            url
          }
        }
        stylist_yuka: contentfulAsset(title: { eq: "stylist_yuka" }) {
          title
          file {
            url
          }
        }
      }
    `}
    render={data => <Info data={data} />}
  />
)
