import React from 'react'

const Posts = ({ posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <div>
    <ul className='list-group mb-4'>
        {posts.map(post =>(
            <li key={post.url} className='list-group-item'>
                {post.name}
            </li>
        ))}
    </ul>

    </div>
  )
}

export default Posts