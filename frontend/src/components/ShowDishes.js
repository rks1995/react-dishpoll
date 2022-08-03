import { useEffect, useState } from 'react'
import axios from 'axios'

const ShowDishes = () => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await axios.get(
        'https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
      )
      console.log(response.data)
    }
    fetchDishes()
  })
  return <div>ShowDishes</div>
}
export default ShowDishes
