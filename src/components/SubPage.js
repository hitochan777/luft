import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Title = styled.h1`
    font-family: font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
   text-align: center;
text-decoration: underline;
`

const SubPageContent = ({ title, children }) => (
  <Container>
    <Row>
      <Col>
        <Title>{title}</Title>
      </Col>
    </Row>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
)

export default SubPageContent
