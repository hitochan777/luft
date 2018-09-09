import React from 'react'
import styled from 'styled-components'

const StylistDescItemTitle = styled.span`
  border-left: 5px solid black;
  padding-left: 10px;
`
const StylistDescItemContent = styled.div``

const StylistDescItem = ({ title, children }) => (
  <div>
    <StylistDescItemTitle>{title}</StylistDescItemTitle>
    <StylistDescItemContent>{children}</StylistDescItemContent>
  </div>
)

export default StylistDescItem
