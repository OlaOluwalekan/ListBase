import { useState } from 'react'
import Button from '../componets/buttons/Button'
import JustLink from '../componets/link/JustLink'
import TextBox from '../componets/text/TextBox'
import styles from '../css/login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../features/userSlice'
import InlineLoading from '../componets/loading/InlineLoading'
import { useEffect } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading, user } = useSelector((store) => store.user)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      toast.error('Email is required')
      return
    }
    if (!password) {
      toast.error('Password is required')
      return
    }
    dispatch(loginUser({ email, password }))
  }

  useEffect(() => {
    if (user) {
      setEmail('')
      setPassword('')
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    }
  }, [user])

  return (
    <div className={styles.main}>
      <div>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <TextBox
            type='email'
            phd='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            type='password'
            phd='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            solid='true'
            bgc='var(--brown)'
            color='var(--lightYellow)'
            type='submit'
            width='100%'
          >
            {isLoading ? <InlineLoading /> : 'Register'}
          </Button>
        </form>
        <p>
          Not yet registered?{' '}
          <JustLink to='/auth/register'>register Here</JustLink>
        </p>
      </div>
    </div>
  )
}
export default Login
