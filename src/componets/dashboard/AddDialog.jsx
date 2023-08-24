import { useState } from 'react'
import { colorScheme, fonts } from '../../utils/colorSchemes'
import TextBox from '../text/TextBox'
import Overlay from './Overlay'
import Theme from './Theme'
import styles from './add-dialog.module.css'
import Font from './Font'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import { useEffect } from 'react'
import Button from '../buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWriteDialog } from '../../features/userSlice'
import { createTodo, getTodos } from '../../features/todoSlice'
import { toast } from 'react-toastify'
import InlineLoading from '../loading/InlineLoading'

const AddDialog = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [theme, setTheme] = useState('#f7f0f0')
  const [fontFamily, setFontFamily] = useState(`'Poppins', sans-serif`)
  const [fontSelectionIsOpen, setFontSelectionIsOpen] = useState(false)
  const fontContainerRef = useRef(null)
  const dispatch = useDispatch()
  const { todo, isLoading } = useSelector((store) => store.todo)

  const toggleFontSelect = () => {
    setFontSelectionIsOpen(!fontSelectionIsOpen)
  }

  useEffect(() => {
    if (fontSelectionIsOpen) {
      fontContainerRef.current.parentElement.style.overflowY = 'unset'
      fontContainerRef.current.style.top = '0'
    } else {
      fontContainerRef.current.parentElement.style.overflowY = 'hidden'
    }
  }, [fontSelectionIsOpen])

  useEffect(() => {
    if (todo) {
      setTitle('')
      setDescription('')
      setTheme('#f7f0f0')
      setFontFamily(`'Poppins', sans-serif`)
      dispatch(toggleWriteDialog(false))
      dispatch(getTodos())
    }
  }, [todo])

  const selectFont = (font) => {
    setFontFamily(font.value)
    setFontSelectionIsOpen(!fontSelectionIsOpen)
    fontContainerRef.current.style.top = `-${(Number(font.id) - 1) * 20}px`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ title, description, theme, fontFamily })
    if (!title) {
      toast.error('Title is required')
    }
    dispatch(createTodo({ title, description, theme, fontFamily }))
  }

  return (
    <Overlay
      onClick={() => {
        dispatch(toggleWriteDialog(false))
      }}
    >
      <form
        className={styles['add-dialog']}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          onClick={() => {
            dispatch(toggleWriteDialog(false))
          }}
        >
          <FaTimes />
        </span>
        <h2>Add Todo</h2>
        <TextBox
          type='text'
          phd='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        <textarea
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        ></textarea>

        {/* COLOR THEME SELECTION */}
        <p>Select a theme:</p>
        <section>
          {colorScheme.map((color) => {
            return (
              <Theme
                key={color}
                color={color}
                selectedTheme={theme}
                onClick={(e) => {
                  setTheme(color)
                  e.stopPropagation()
                }}
              />
            )
          })}
        </section>

        {/* FONT SELECTION */}
        <p>Select a font:</p>
        <div>
          <span
            onClick={(e) => {
              toggleFontSelect()
              e.stopPropagation()
            }}
            className={fontSelectionIsOpen ? styles.open : ''}
          >
            <FaChevronDown />
          </span>
          <section
            className={fontSelectionIsOpen ? styles.open : ''}
            ref={fontContainerRef}
          >
            {fonts.map((font) => {
              return (
                <Font
                  key={font.id}
                  font={font.value}
                  selectedFont={fontFamily}
                  onClick={() => selectFont(font)}
                >
                  {font.name}
                </Font>
              )
            })}
          </section>
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          type='submit'
          solid='true'
          bgc='var(--brown)'
          color='var(--lightYellow)'
          width='100%'
        >
          {isLoading ? <InlineLoading /> : 'Create Todo'}
        </Button>
      </form>
    </Overlay>
  )
}
export default AddDialog
