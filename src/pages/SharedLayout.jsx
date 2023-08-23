import { Outlet } from 'react-router-dom'
import Navbar from '../componets/navbar/Navbar'

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default SharedLayout
