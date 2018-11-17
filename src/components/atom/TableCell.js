import React from 'react'
import styled from 'styled-components'

export default styled.td`
  border-top: ${props => (props.isLastRow ? '0px' : '1px')} solid
    ${props => props.theme.luftColor};
  border-bottom: ${props => (props.isLastRow ? '0px' : '1px')} solid
    ${props => props.theme.luftColor};
  height: 50px;
`
