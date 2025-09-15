import { useState } from 'react'

const DessertList = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()    // how do we know to use these?
  // When loading, the component should print htat it is loading

  return (
    <div>
      <h1>Desserts</h1>
    </div>
  )
}

export default DessertList;
