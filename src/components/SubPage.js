import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    margin: 0 auto 30px;
    padding-top: 80px;
    font-family: font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
    text-align: center;
    text-decoration: underline;
`

const SubContent = styled.div`
  @media screen and (min-width: ${props => props.theme.threshold}) {
    margin-left: calc(
      ${props => props.theme.sideNavbarWidth} +
        (100vw - ${props => props.theme.sideNavbarWidth}) * (1 - 0.8) / 2
    );
    width: calc((100vw - ${props => props.theme.sideNavbarWidth}) * 0.8);
  }
`

const Content = ({ title, children, className }) => (
  <>
    <SubContent>
      <Title>{title}</Title>
      {children}
    </SubContent>
  </>
)

export default Content
