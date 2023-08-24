import { useDispatch, useSelector } from 'react-redux'
import styles from '../../css/dashboard.module.css'
import TodoList from '../../componets/dashboard/TodoList'
import Filters from '../../componets/dashboard/Filters'
import AddDialog from '../../componets/dashboard/AddDialog'

const Dashboard = () => {
  const { user, writeDialogIsOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <div className={styles.main}>
      <div>
        <section>
          <h2>Your Dashboard</h2>
          <p>{user.email}</p>
          <Filters />
          <TodoList />
          {writeDialogIsOpen && <AddDialog />}
        </section>
      </div>
    </div>
  )
}
export default Dashboard
