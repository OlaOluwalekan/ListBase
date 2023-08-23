import { styled } from 'styled-components'

const TextBox = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.phd,
  value: props.value,
  onChange: props.onChange,
}))`
  padding: 5px 10px;
  width: 100%;
  margin: 5px 0;
`

export default TextBox
