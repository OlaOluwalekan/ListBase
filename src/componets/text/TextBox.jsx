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

export const TextWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightYellow);
  padding: 5px 10px;
  border-radius: 5px;
  span {
    width: 20px;
    aspect-ratio: 1;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-right: 10px;
    color: var(--orange);
  }
  input {
    border: none;
    background: none;
    padding: 0;
  }
  input:focus {
    border: none;
    outline: none;
  }
`

export default TextBox
