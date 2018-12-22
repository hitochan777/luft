import React from 'react'
import styled from 'styled-components'

import Content from '../components/SubPage'
import Layout from '../components/Layout'
import Image from '../components/atom/Image'

import Image1 from '../assets/img/slide1.jpg'
import Image2 from '../assets/img/slide2.jpg'

const OwnerName = styled.div`
  border-left: 6px solid black;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 50px;
`

const SubTitle = styled.h3`
  margin-bottom: 0px;
`

const Concept = () => (
  <Layout>
    <Content title="Concept">
      <Image
        src={Image1}
        alt="image1"
        height="400px"
        width="100%"
        style={{ objectFit: 'cover' }}
      />
      <SubTitle>
        ドイツ語で
        <br />
        「空気」を意味するLuft。
      </SubTitle>
      <br />
      どんよりしていた空気も、からっとするように、
      ここに来れば誰もが「笑顔」になれる美容室を。
      <br />
      そんな想いをこめて、2007年にオープンしました。
      <br />
      たかが髪型と言われるかもしれませんが、
      見た目が変わると、テンションがあがります。
      <br />
      私たちは誰もが持っている「美」を引き出すための
      お手伝いをさせていただきます。 <br />
      <br />
      <Image
        src={Image2}
        alt="image2"
        height="300px"
        width="100%"
        style={{ objectFit: 'cover' }}
      />
      <br />
      <SubTitle>
        Long user future together... <br /> 皆さまと、ずっと。
      </SubTitle>
      <br />
      家族と一緒にでも、 仕事帰りで作業着のままでも、 <br />
      生後6ヶ月でも、ご来店をお待ちしています。
      <br />
      <OwnerName style={{ marginBottom: '30px' }}>オーナー 川見 淳</OwnerName>
    </Content>
  </Layout>
)

export default Concept
