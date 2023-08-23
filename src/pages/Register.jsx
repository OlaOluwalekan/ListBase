import { useState } from 'react'
import Button from '../componets/buttons/Button'
import JustLink from '../componets/link/JustLink'
import TextBox from '../componets/text/TextBox'
import styles from '../css/register.module.css'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/userSlice'
import InlineLoading from '../componets/loading/InlineLoading'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading, user } = useSelector((store) => store.user)
  const navigate = useNavigate()

  // let text =
  //   'Firebase: Password should be at least 6 characters (auth/weak-password).'
  // let text = 'Firebase: Error (auth/email-already-in-use).'

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
    dispatch(registerUser({ email, password }))
  }

  useEffect(() => {
    if (user) {
      setEmail('')
      setPassword('')
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    }
    // console.log(user)
  }, [user])

  return (
    <div className={styles.main}>
      <div>
        <h2>Create Your Free account</h2>
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
          Already have an account?{' '}
          <JustLink to='/auth/login'>Login Here</JustLink>
        </p>
      </div>
    </div>
  )
}
export default Register
