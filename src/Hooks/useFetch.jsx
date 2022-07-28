import { useEffect, useState } from 'react'
import { perPageLogic } from '../utils/logic'

const url = 'https://api.github.com/users/abubakarshf/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setLoading(false)
    setData(perPageLogic(data))

  }

  useEffect(() => {
    getProducts()
  }, [])
  return {loading,data}
}