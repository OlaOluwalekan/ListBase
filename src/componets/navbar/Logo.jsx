import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

const Logo = () => {
  return (
    <Link className={styles.logo} to='/'>
      List<span>Base</span>
    </Link>
  )
}
export default Logo
