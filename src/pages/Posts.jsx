import React from 'react'

const Posts = ({ posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <div>Posts</div>
  )
}

export default Posts