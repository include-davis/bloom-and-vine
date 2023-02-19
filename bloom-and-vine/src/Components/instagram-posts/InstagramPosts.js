import { useState, useEffect } from 'react'
import axios from 'axios';
import './InstagramPosts.css'

const options = {
    method: 'GET',
    mode: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    }
}

const QUERY_URL = "http://localhost:3000/api/instagram-posts"

export default function InstagramPosts () {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        async function fetchPostData() {
            const postData = await axios.get(QUERY_URL, options).then(res => res.data)
            setPosts(postData)
        }
        fetchPostData()
    }, [])

    return (
        <div>
            <h1>POSTS</h1>
        </div>
    )
};