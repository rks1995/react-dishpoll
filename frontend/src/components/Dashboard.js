import { Link } from 'react-router-dom'
import { HomeWrapper } from '../assets/Wrappers/HomeWrapper'
import styles from '../assets/styles/home.module.css'
import Typewriter from 'typewriter-effect'

function DashBoard() {
  return (
    <div className='App'>
      <HomeWrapper>
        <div className={styles.links}>
          <Link
            className={[styles.button, styles.showDishes].join(' ')}
            to={'/list'}
          >
            Start Voting
          </Link>
          <Link
            className={[styles.button, styles.results].join(' ')}
            to={'/list/results'}
          >
            Show Result
          </Link>
        </div>
        {/* welcome text on dashboard */}
        <Typewriter
          options={{
            strings: [
              'Welcome To Dish Voting App!',
              'Start Voting Your Favourite dishes!',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 1,
            delay: 40,
            wrapperClassName: styles.welcomeText,
            cursorClassName: styles.cursor,
            pauseFor: 2500,
          }}
        />
      </HomeWrapper>
    </div>
  )
}

export default DashBoard
