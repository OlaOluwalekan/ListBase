import Button from '../buttons/Button'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.main}>
      <div>
        <p>
          Stay <span>organized</span> and <span>on track</span> with your task
        </p>
        <section>
          <Button
            solid='true'
            bgc='var(--brown)'
            color='var(--lightYellow)'
            width='80%'
            as='a'
            href='/auth/register'
          >
            Get Started
          </Button>
          <Button
            solid=''
            bgc='var(--brown)'
            color='var(--lightYellow)'
            width='80%'
            as='a'
            href='/auth/login'
          >
            Login
          </Button>
        </section>
      </div>
    </div>
  )
}
export default Hero
