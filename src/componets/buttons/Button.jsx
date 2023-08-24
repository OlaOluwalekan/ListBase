import styled from 'styled-components'

const Button = styled.button.attrs((props) => ({
  type: props.type,
}))`
  background: ${(props) => {
    return props.solid ? props.bgc : 'none'
  }};
  border: ${(props) => {
    return props.solid ? 'none' : `2px solid ${props.bgc}`
  }};
  color: ${(props) => {
    return props.solid ? props.color : props.color ? props.color : props.bgc
  }};
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 900;
  width: ${(props) => props.width};
  text-decoration: none;
  text-align: center;
  margin: 10px 0;
  display: flex;
  place-items: center;
  gap: 5px;
`
export default Button
