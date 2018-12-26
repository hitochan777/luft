import styled from 'styled-components'

export default styled.div`
  @media screen and (max-width: ${props => props.theme.tablet_width}) {
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
  }
`
