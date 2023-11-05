import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const DataFetch = () =>{
    fetch(url)
    .then((Resp)=>{
      if (!Resp.ok) {
        throw Error("Connection Faild")
      }else{
       return Resp.json()
      }
    })
    .then((data)=>{
      setData(data)
      setLoading(false)
      setError(null)
    })
    .catch((error)=>{
      setError(error.message)
      setLoading(false)
    })
  }

  useEffect(()=>{
    setTimeout(() => {
      DataFetch()
    }, 2000);
}, [url])

  return [data, loading, error]
}

export default useFetch
