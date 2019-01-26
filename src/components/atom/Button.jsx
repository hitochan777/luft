import styled from 'styled-components'

const Button = styled.a`
  background-color: white;
  color: ${props => props.theme.grayColor};
  text-decoration: none;
  text-align: center;
  border: 1px solid ${props => props.theme.lightGray};
  width: 100%;
  transition: 0.8s;
  border-radius: 10px;
  &:hover {
    background-color: ${props => props.theme.lightGray};
  }
  text-transform: uppercase;
`

export default Button
