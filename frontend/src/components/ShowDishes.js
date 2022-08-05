import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../assets/styles/dish.module.css'
import { DishWrapper } from '../assets/Wrappers/DishWrapper'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const ShowDishes = () => {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchDishes = async () => {
      const response = await axios.get(
        'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
      )
      setDishes(response.data)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    fetchDishes()
  }, [])
  return (
    <ul>
      <Link to={'/'} className={styles.backBtn}>
        {'< '}Back
      </Link>
      {loading ? (
        <Spinner />
      ) : (
        <DishWrapper>
          {dishes.map((dish) => {
            const { id, dishName, description, image } = dish
            return (
              <li key={id} className={styles.dishItem}>
                <img src={image} alt='dish-img' width={150} />
                <h1>{dishName}</h1>
                <p>{description}</p>
                <div className={styles.rankContainer}>
                  <span className={styles.rank}>1</span>
                  <span className={styles.rank}>2</span>
                  <span className={styles.rank}>3</span>
                </div>
              </li>
            )
          })}
        </DishWrapper>
      )}
    </ul>
  )
}
export default ShowDishes
