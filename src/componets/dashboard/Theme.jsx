import { styled } from 'styled-components'

const Theme = styled.article`
  width: 40px;
  aspect-ratio: 1;
  background: ${(props) => props.color};
  border-radius: 50%;
  border: ${(props) =>
    props.selectedTheme === props.color ? '2px solid var(--brown)' : 'none'};
  transition: all ease 300ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`

export default Theme
