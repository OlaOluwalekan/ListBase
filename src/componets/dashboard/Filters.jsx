import { useRef } from 'react'
import TextBox, { TextWrapper } from '../text/TextBox'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'
import Button from '../buttons/Button'
import styles from './dashboard-items.module.css'
import { useDispatch } from 'react-redux'
import { toggleWriteDialog } from '../../features/userSlice'

const Filters = () => {
  const textRef = useRef(null)
  const dispatch = useDispatch()

  const focusSearch = () => {
    textRef.current.children[1].focus()
    textRef.current.style.background = 'none'
    textRef.current.style.border = '2px solid var(--orange)'
  }

  window.onclick = () => {
    if (document.activeElement !== textRef.current?.children[1]) {
      textRef.current.style.background = 'var(--lightYellow)'
      textRef.current.style.border = 'none'
    }
  }

  return (
    <div className={styles.filters}>
      <div>
        <TextWrapper ref={textRef} onClick={focusSearch}>
          <span>
            <FaSearch />
          </span>
          <TextBox type='text' phd='search...' />
        </TextWrapper>
        <article>
          <Button
            style={{ borderRadius: '3px' }}
            solid='true'
            bgc='var(--brown)'
            color='var(--yellow)'
            onClick={(e) => {
              dispatch(toggleWriteDialog(true))
              e.stopPropagation()
            }}
          >
            <FaPlus />
            Add Todo
          </Button>
          <span>
            <TbReload />
          </span>
        </article>
      </div>
    </div>
  )
}
export default Filters
