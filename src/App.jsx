import React, { Fragment, useEffect, useState } from "react"
import Follower from "./components/Follower"
import { useFetch } from "./Hooks/useFetch"

const App = () => {
  const { loading, data } = useFetch()
  const [followerData, setFollowerData] = useState([])
  const [page, setPage] = useState(0)

  const handlePage = (index) => {
    setPage(index)
  }

  useEffect(() => {
    if (loading) return
    setFollowerData(data[page])
  }, [loading, page])

  return (
    <Fragment>
      <div className='flex justify-center my-5'>
        <h1 className='font-bold font-mono text-3xl'>
          {loading ? "loading..." : "Pagination"}
        </h1>
      </div>
      {followerData.map((data) => {
        return <Follower key={data.id} {...data} loading={loading} />
      })}
      {!loading && (
        <div>
          {followerData.map((_, index) => {
            return (
              <button
                key={index}
                className={`text-center  bg-blue-500 hover:bg-blue-700 mx-2 my-2 text-white font-bold py-2 px-4 rounded ${index===page?'activeClass':null}`}
                onClick={()=>handlePage(index)}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      )}
    </Fragment>
  )
}

export default App
