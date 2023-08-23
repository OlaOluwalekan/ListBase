import { useSelector } from 'react-redux'
import Hero from '../componets/hero/Hero'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { user } = useSelector((store) => store.user)

  if (user) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div>
      <Hero />
    </div>
  )
}
export default Home
