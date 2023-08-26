import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos, getTodos } from '../../features/todoSlice'
import { collection, getFirestore, onSnapshot } from 'firebase/firestore'
import { useState } from 'react'
import Todo from './Todo'
import styles from './todo-list.module.css'

const db = getFirestore()
const collectionRef = collection(db, 'to-dos')

const TodoList = () => {
  const dispatch = useDispatch()
  const { toDos, isLoading } = useSelector((store) => store.todo)
  const { user, listType, sortType } = useSelector((store) => store.user)

  console.log(listType)

  useEffect(() => {
    dispatch(
      getTodos({
        user: user.uid,
        orderBy: sortType.field,
        orderType: sortType.order,
      })
    )
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={`${styles.main} ${styles[listType]}`}>
      {toDos.map((todo) => {
        return <Todo key={todo.id} {...todo} />
      })}
    </div>
  )
}
export default TodoList
