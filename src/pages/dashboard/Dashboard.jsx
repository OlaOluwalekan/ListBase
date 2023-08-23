import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { user } = useSelector((store) => store.user)
  console.log(user)

  return (
    <div>
      <div>
        <section>{user.email}</section>
        {user.uid}
      </div>
    </div>
  )
}
export default Dashboard
