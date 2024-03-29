import React from 'react'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'

async function getData() {
  const apiUrl=process.env.API_URL;
    const res = await fetch(`${apiUrl}/api/posts`, { cache: 'no-store' });

    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
}

const Crud = async () => {

    const posts = await getData();

  return (
    <div className='max-w-4xl mx-auto mt-4'>
        <div className='my-10 flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>Todo List to Learn Website</h1>
            <AddPost />
            
        </div>

        <PostList posts={posts} />
    </div>
  )
}

export default Crud
