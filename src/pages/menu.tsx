import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Content from '../components/template/SubPage'
import Layout from '../components/template/Layout'
import Table from '../components/atom/Table'
import TableCell from '../components/atom/TableCell'
import * as media from '../utils/media'
import { Flex, Box } from '../components/atom/Grid'

const MenuTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
`

const StyledMenuSection = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-basis: 200px;
  justify-content: center;
`
const MenuItemWrapper = styled.div`
  width: 100%;
  ${media.min.tablet`
    width: 80%;
  `}
`

const MenuSection = ({
  title,
  children,
  remarks,
}: {
  title: string
  children: ReactNode
  remarks?: string
}) => (
  <StyledMenuSection>
    <MenuItemWrapper>
      <MenuTitle>{title}</MenuTitle>
      <Table>
        <tbody>{children}</tbody>
      </Table>
      {remarks}
    </MenuItemWrapper>
  </StyledMenuSection>
)

const MenuItem = styled.tr`
  &:last-child {
    border-bottom: 0 none transparent;
  }
`

const MenuContent = ({ content }: { content: string } = { content: '' }) => (
  <TableCell>{content}</TableCell>
)

const PriceTableCell = styled(TableCell)`
  text-align: right;
`

const MenuPrice = (
  { price, minimum }: { price?: number; minimum?: boolean } = {
    price: undefined,
    minimum: false,
  }
) => {
  return (
    /* Put comma for every 3 digits */
    <PriceTableCell>
      {price && String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
      {price && '円'}
      {minimum && '〜'}
    </PriceTableCell>
  )
}

export default () => (
  <Layout>
    <Content title="Menu">
      <Flex justifyContent="center" flexWrap="wrap">
        <Box width={[1, 1 / 2]}>
          <MenuSection title="カット" remarks="※カット、シャンプー、ブロー込み">
            <MenuItem>
              <MenuContent content="カット" />
              <MenuPrice price={4200} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="高校生カット" />
              <MenuPrice price={3400} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="中学生カット" />
              <MenuPrice price={3000} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="フロントカット" />
              <MenuPrice price={500} />
            </MenuItem>
          </MenuSection>
        </Box>
        <Box width={[1, 1 / 2]}>
          <MenuSection title="カラー" remarks="※カット、シャンプー、ブロー込み">
            <MenuItem>
              <MenuContent content="カラー" />
              <MenuPrice price={9000} minimum={true} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="Wカラー" />
              <MenuPrice price={11000} minimum={true} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="白髪ぼかし" />
              <MenuPrice price={6300} />
            </MenuItem>
          </MenuSection>
        </Box>
        <Box width={[1, 1 / 2]}>
          <MenuSection title="パーマ" remarks="※カット、シャンプー、ブロー込み">
            <MenuItem>
              <MenuContent content="パーマ" />
              <MenuPrice price={9000} minimum={true} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="ツイストパーマ" />
              <MenuPrice price={11000} minimum={true} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="ストレートパーマ" />
              <MenuPrice price={14500} minimum={true} />
            </MenuItem>
          </MenuSection>
        </Box>
        <Box width={[1, 1 / 2]}>
          <MenuSection title="その他">
            <MenuItem>
              <MenuContent content="ヘアトリートメント" />
              <MenuPrice price={3600} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="ヘッドスパ" />
              <MenuPrice price={3600} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="フェイスシェービング" />
              <MenuPrice price={1800} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="ノーズワックス" />
              <MenuPrice price={1000} />
            </MenuItem>
            <MenuItem>
              <MenuContent content="ヘアセット" />
              <MenuPrice price={3600} />
            </MenuItem>
          </MenuSection>
        </Box>
      </Flex>
    </Content>
  </Layout>
)
