import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import Content from '../components/SubPage'
import Layout from '../components/Layout'

const MenuTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
`

const MenuSection = ({ title, children }) => (
  <>
    <MenuTitle>{title}</MenuTitle>
    <table style={{ width: '80%', textAlign: 'center' }}>
      <tbody>{children}</tbody>
    </table>
  </>
)

const MenuItem = styled.tr`
  &:last-child {
    border-bottom: 0 none transparent;
  }
`
const MenuContent = ({ content }) => <td>{content}</td>
const MenuPrice = (
  { price, minimum } = { price: undefined, minimum: false }
) => (
  <td>
    {price}
    {price && '円'}
    {minimum && '〜'}
  </td>
)

export default () => (
  <Layout>
    <Content title="Menu">
      <Container>
        <Row noGutters={true}>
          <Col xs="12" sm="6">
            <MenuSection title="カット">
              <MenuItem>
                <MenuContent content="カット" />
                <MenuPrice price={3800} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="高校生カット" />
                <MenuPrice price={3300} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="中学生カット" />
                <MenuPrice price={2500} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="フロントカット" />
                <MenuPrice price={500} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="※カット、シャンプー、ブロー込み" />
                <MenuPrice />
              </MenuItem>
            </MenuSection>
          </Col>
          <Col xs="12" sm="6">
            <MenuSection title="カラー">
              <MenuItem>
                <MenuContent content="カラー" />
                <MenuPrice price={8500} minimum={true} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="Wカラー" />
                <MenuPrice price={8500} minimum={true} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="白髪ぼかし" />
                <MenuPrice price={6000} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="※カット、シャンプー、ブロー込み" />
                <MenuPrice />
              </MenuItem>
            </MenuSection>
          </Col>
          <Col xs="12" sm="6">
            <MenuSection title="パーマ">
              <MenuItem>
                <MenuContent content="パーマ" />
                <MenuPrice price={8500} minimum={true} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="ポイントパーマ" />
                <MenuPrice price={6500} minimum={true} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="ツイストパーマ" />
                <MenuPrice price={10800} minimum={true} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="ストレートパーマ" />
                <MenuPrice price={13900} minimum={true} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="ポイントストレート" />
                <MenuPrice price={6800} minimum={true} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="※カット、シャンプー、ブロー込み" />
                <MenuPrice />
              </MenuItem>
            </MenuSection>
          </Col>
          <Col xs="12" sm="6">
            <MenuSection title="その他">
              <MenuItem>
                <MenuContent content="ヘアトリートメント" />
                <MenuPrice price={3500} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="ヘッドスパ" />
                <MenuPrice price={3500} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="フェイスシェービング" />
                <MenuPrice price={1500} />
              </MenuItem>
              <MenuItem>
                <MenuContent content="ブラジリアンワックス（鼻）" />
                <MenuPrice price={1000} />
              </MenuItem>
            </MenuSection>
          </Col>
        </Row>
      </Container>
    </Content>
  </Layout>
)
