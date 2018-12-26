import React from 'react'
import styled from 'styled-components'

const StyledStylistDescItem = styled.div`
  text-align: center;
`

const StylistDescItem = ({ title, children }) => (
  <StyledStylistDescItem>
    {title}: {children}
  </StyledStylistDescItem>
)

export default StylistDescItem