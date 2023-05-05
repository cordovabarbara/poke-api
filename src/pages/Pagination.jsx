import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Posts from './Posts';

const Pagination = ({  }) => {
    const[posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState (10);

    useEffect(() =>{
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.');
        setPosts(res.data);
        setLoading(false);
      }

      fetchPosts ();
    }, []);

    console.log(posts);


  return (
    <div className='container__ppl'>
    <Posts posts={posts} loading={loading}/>
    </div>
  )
}

export default Pagination