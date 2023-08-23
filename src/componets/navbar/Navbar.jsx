import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import NaviLink from './NaviLink'
import styles from './navbar.module.css'
import Button from '../buttons/Button'
import { removeUserFromLocalStorage } from '../../utils/localStorage'
import { logOut } from '../../features/userSlice'

const Navbar = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <div className={styles.main}>
      <div>
        <Logo />
        <nav>
          <NaviLink path='/' text='Home' />
          {!user && <NaviLink path='/auth/register' text='Register' />}
          {!user && <NaviLink path='/auth/login' text='Login' />}
          {user && (
            <Button
              solid='true'
              bgc='none'
              color='var(--yellow)'
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </Button>
          )}
        </nav>
      </div>
    </div>
  )
}
export default Navbar
