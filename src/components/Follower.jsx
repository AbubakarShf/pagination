import React, { Fragment } from "react"
const Follower = ({ avatar_url, html_url, login },loading) => {
 return (
<Fragment>
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={avatar_url} alt={login} width='150' height='150'/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center capitalize mb-2">{login}</div>

      </div>
      <a href={html_url} className="flex text-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Follow</a>
      <div className="px-6 pt-4 pb-1">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{login}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Follower</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Programmer</span>
      </div>
    </div>
  </div>
</Fragment>
  )
}

export default Follower
