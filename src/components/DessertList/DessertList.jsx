import { useEffect, useState } from 'react'
import DessertItem from './components/DessertItem'

const DessertList = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch ('/data/data.json')
        if (!response.ok) {
          throw new Error(`File not found! URL: ${response.url}`)
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <p>loading</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Desserts</h1>
      <ul className='dessert-list'>
        {
          data.map((item) => (
            <li>
              <DessertItem
                image={item.image}
                category={item.category}
                name={item.name}
                price={item.price}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DessertList;
