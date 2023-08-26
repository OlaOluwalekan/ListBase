import { useEffect, useRef } from 'react'
import TextBox, { TextWrapper } from '../text/TextBox'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'
import Button from '../buttons/Button'
import styles from './dashboard-items.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleListType,
  toggleSortType,
  toggleWriteDialog,
} from '../../features/userSlice'
import { listType, sortType } from '../../utils/colorSchemes'
import OptionInput from '../text/OptionInput'
import { getTodos } from '../../features/todoSlice'

const Filters = () => {
  const textRef = useRef(null)
  const dispatch = useDispatch()
  const {
    user,
    listType: listStyle,
    sortType: sortStyle,
  } = useSelector((store) => store.user)

  useEffect(() => {
    dispatch(
      getTodos({
        user: user.uid,
        orderBy: sortStyle.field,
        orderType: sortStyle.order,
      })
    )
  }, [sortStyle])

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
      <section>
        <article>
          {listType.map((type) => {
            return (
              <OptionInput
                key={type.id}
                {...type}
                name='list-type'
                selected={listStyle === type.value}
                onChange={() => dispatch(toggleListType(type.value))}
              />
            )
          })}
        </article>
        <div>
          {sortType.map((type) => {
            return (
              <OptionInput
                key={type.id}
                {...type}
                name='sort-type'
                selected={
                  sortStyle.field === type.field &&
                  sortStyle.order === type.value
                }
                onChange={() => {
                  dispatch(
                    toggleSortType({ field: type.field, order: type.value })
                  )
                }}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
export default Filters
