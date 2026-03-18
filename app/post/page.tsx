import React from 'react'

const Posts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json()
    return (
        <>
            <div>Posts</div>
            {posts.map((p: any) => (
                <div className='bg-gray-400 mb-2 p-2' key={p.id}>
                    <h2>{p.title}</h2>
                    <p>{p.body}</p>
                </div>
            ))}
        </>
    );
}

export default Posts