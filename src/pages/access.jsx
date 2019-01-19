import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'

import Content from '../components/template/SubPage'
import Layout from '../components/template/Layout'
import { CoverImage } from '../components/atom/Image'

const Access = ({ data }) => (
  <Layout>
    <Content title="Access">
      <CoverImage src={data.cover.file.url} alt="image1" />
      <Flex justifyContent="center" flexWrap="wrap" mt="50px">
        <Box width={[1, 2 / 5]} pl="30px">
          <p>
            Hair Luft（ヘアールフト）
            <br />
            兵庫県豊岡市若松町7-4
          </p>
        </Box>
        <Box width={[1, 2 / 5]} pl="30px">
          <p>
            営業時間／ 火～日・祝　9:00～19:00
            <br />
            定休日／ 毎週月曜日、第2・3火曜日
            <br />
            駐車場／2台あり
          </p>
        </Box>
      </Flex>
      <Flex justifyContent="center" flexWrap="wrap" mt="50px">
        <Box width={[1]}>
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
      </Flex>
    </Content>
  </Layout>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        cover: contentfulAsset(title: { eq: "access" }) {
          title
          file {
            url
          }
        }
      }
    `}
    render={data => <Access data={data} />}
  />
)
