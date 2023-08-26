import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { toggleListType } from '../../features/userSlice'

const OptionsWrapper = styled.article`
  font-size: 25px;
  input {
    display: none;
  }
  label {
    color: var(--black);
    opacity: 0.7;
    width: 30px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
  }
  input:checked ~ label {
    background-color: var(--brown);
    color: var(--gold);
    opacity: 1;
  }
`

const OptionInput = ({ id, value, icon, name, onChange, selected }) => {
  const dispatch = useDispatch()
  const { listType } = useSelector((store) => store.user)

  return (
    <OptionsWrapper>
      <input
        type='radio'
        name={name}
        id={id}
        onChange={onChange}
        checked={selected}
      />
      <label htmlFor={id}>{icon}</label>
    </OptionsWrapper>
  )
}
export default OptionInput
