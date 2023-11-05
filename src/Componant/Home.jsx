import React from 'react'
import useFetch from './DataFetch/useFetch'
import Card from './Card'

const Home = () => {
  const [data, loading, error] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {loading && <p>Loading..</p> }
      {error && <p>{error}</p> }
      {data && data.map((item)=> <p key={item.id}> {item.title} </p> ) }
    </div>
  )
}

export default Home
