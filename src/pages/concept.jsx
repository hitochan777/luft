import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Content from '../components/template/SubPage'
import Layout from '../components/template/Layout'
import { CoverImage } from '../components/atom/Image'

const OwnerName = styled.div`
  border-left: 6px solid black;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 50px;
`

const SubTitle = styled.h3`
  margin-bottom: 0px;
  font-weight: bold;
  line-height: 1.7;
`

const Concept = ({ data }) => (
  <Layout>
    <Content title="Concept">
      <CoverImage src={data.cover.file.url} alt="image1" />
      <SubTitle>
        ドイツ語で
        <br />
        「空気」を意味するLuft。
      </SubTitle>
      <br />
      どんよりしていた空気も、からっとするように、
      <br />
      ここに来れば誰もが「笑顔」になれる美容室を。
      <br />
      そんな想いをこめて、2007年にオープンしました。
      <br />
      <br />
      たかが髪型と言われるかもしれませんが、
      <br />
      見た目が変わるとテンションがあがります。
      <br />
      私たちは誰もが持っている「美」を引き出すための
      <br />
      お手伝いをさせていただきます。
      <br />
      <br />
      <SubTitle>
        Long user future together... <br /> 皆さまと、ずっと。
      </SubTitle>
      <br />
      家族と一緒にでも、 仕事帰りで作業着のままでも、 <br />
      生後6ヶ月でも、ご来店をお待ちしています。
      <br />
      <OwnerName style={{ marginBottom: '30px' }}>オーナー 河見 淳</OwnerName>
    </Content>
  </Layout>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        cover: contentfulAsset(title: { eq: "concept" }) {
          title
          file {
            url
          }
        }
      }
    `}
    render={data => <Concept data={data} />}
  />
)
