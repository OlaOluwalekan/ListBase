import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

const NaviLink = ({ path, text }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive
          ? `${styles['nav-link']} ${styles.active}`
          : `${styles['nav-link']}`
      }}
    >
      {text}
    </NavLink>
  )
}
export default NaviLink
