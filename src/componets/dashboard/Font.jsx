import { styled } from 'styled-components'

const Font = styled.p`
  font-family: ${(props) => props.font};
  font-size: 12px;
  line-height: 20px;
  background: ${(props) =>
    props.selectedFont === props.font ? 'var(--brown)' : 'none'};
  color: ${(props) =>
    props.selectedFont === props.font ? 'var(--yellow)' : 'var(--brown)'};
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    padding-left: 20px;
    transition: all 300ms ease;
  }
`

export default Font
