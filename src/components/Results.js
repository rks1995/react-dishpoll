import { useEffect, useState } from 'react'
import { DishWrapper } from '../assets/Wrappers/DishWrapper'
import styles from '../assets/styles/result.module.css'
import styles2 from '../assets/styles/dish.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

const Results = () => {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('itemList')) {
      const arr = JSON.parse(localStorage.getItem('itemList'))
      setItems(arr)
    }
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <>
      <Link onClick={() => navigate(-1)} to={''} className={styles2.backBtn}>
        {'< '}Back
      </Link>
      <DishWrapper>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Top Three Dishes</h1>
            <div className={styles.topThree}>
              <table border={1}>
                <thead>
                  <tr>
                    <th>RANK</th>
                    <th>DISH NAME</th>
                    <th>POINTS</th>
                  </tr>
                </thead>
                <tbody>
                  {items !== null &&
                    items.map((item, index) => {
                      if (index <= 2) {
                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.dishName}</td>
                            <td>{item.points}</td>
                          </tr>
                        )
                      }
                      return null
                    })}
                </tbody>
              </table>
            </div>
            <h1>Others</h1>
            <div className={styles.others}>
              <table border={1}>
                <thead>
                  <tr>
                    <th>RANK</th>
                    <th>DISH NAME</th>
                    <th>POINTS</th>
                  </tr>
                </thead>
                <tbody>
                  {items !== null &&
                    items.map((item, index) => {
                      if (index > 2) {
                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.dishName}</td>
                            <td>{item.points}</td>
                          </tr>
                        )
                      }
                      return null
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </DishWrapper>
    </>
  )
}
export default Results
