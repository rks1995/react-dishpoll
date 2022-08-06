import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../assets/styles/dish.module.css'
import { DishWrapper } from '../assets/Wrappers/DishWrapper'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import Toast from 'react-hot-toast'

const ShowDishes = () => {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [votingInProcess, setVotingInProcess] = useState(false)
  const [rank1, setRank1] = useState(null)
  const [rank2, setRank2] = useState(null)
  const [rank3, setRank3] = useState(null)

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await axios.get(
        'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
      )
      setDishes(response.data)
      if (!localStorage.getItem('itemList')) {
        localStorage.setItem('itemList', JSON.stringify(response.data)) // itemList will contain list of dishes with corresponding rank
      }
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
    fetchDishes()
  }, [])

  // handle rank functions
  const rankOne = (id) => {
    // switch rank between different item
    if (id !== rank2 && id !== rank3) {
      setRank1(id)
    }

    // switch rank within same item
    if (id === rank2) {
      setRank2(null)
      setRank1(id)
    }
    if (id === rank3) {
      setRank3(null)
      setRank1(id)
    }
  }

  const rankTwo = (id) => {
    if (id !== rank1 && id !== rank3) {
      setRank2(id)
    }
    if (id === rank1) {
      setRank1(null)
      setRank2(id)
    }
    if (id === rank3) {
      setRank3(null)
      setRank2(id)
    }
  }

  const rankThree = (id) => {
    if (id !== rank1 && id !== rank2) {
      setRank3(id)
    }
    if (id === rank1) {
      setRank1(null)
      setRank3(id)
    }
    if (id === rank2) {
      setRank2(null)
      setRank3(id)
    }
  }

  // polling dish function
  function updateItem(index, val) {
    let arr = JSON.parse(localStorage.getItem('itemList'))
    if (arr[index]?.points) {
      arr[index].points += val
    } else arr[index].points = val

    localStorage.setItem('itemList', JSON.stringify(arr))
    console.log(arr[index])
  }

  // handle vote button for polling
  const handleVote = () => {
    setVotingInProcess(true)
    updateItem(rank1 - 1, 30)
    updateItem(rank2 - 1, 20)
    updateItem(rank3 - 1, 10)
    setTimeout(() => {
      setVotingInProcess(false)
      Toast.success('Request successfull!', {
        position: 'top-right',
      })
      navigate('/list/results')
    }, 1000)
  }

  return (
    <>
      <Link to={'/'} className={styles.backBtn}>
        {'< '}Back
      </Link>
      <DishWrapper>
        {rank1 && rank2 && rank3 ? (
          <button className={styles.voteBtn} onClick={handleVote}>
            {votingInProcess ? 'Voting...' : 'Vote'}
          </button>
        ) : (
          <button className={styles.disableBtn} disabled={true}>
            Vote
          </button>
        )}

        {loading ? (
          <Spinner />
        ) : (
          <ul>
            {dishes.map((dish) => {
              const { id, dishName, description, image } = dish
              return (
                <li key={id} className={styles.dishItem}>
                  <img src={image} alt='dish-img' width={150} />
                  <h1>{dishName}</h1>
                  <p>{description}</p>
                  <div className={styles.rankContainer}>
                    <span
                      onClick={() => rankOne(id)}
                      className={
                        rank1 === id ? styles.rankActiveBtn : styles.rank
                      }
                    >
                      1
                    </span>
                    <span
                      onClick={() => rankTwo(id)}
                      className={
                        rank2 === id ? styles.rankActiveBtn : styles.rank
                      }
                    >
                      2
                    </span>
                    <span
                      onClick={() => rankThree(id)}
                      className={
                        rank3 === id ? styles.rankActiveBtn : styles.rank
                      }
                    >
                      3
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </DishWrapper>
    </>
  )
}
export default ShowDishes
