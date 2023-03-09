import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import InstagramPost from './components/InstagramPost';
import ForwardArrow from '../../Images/forward_arrow.png'
import BackArrow from '../../Images/back_arrow.png'
import './InstagramPostsSlider.css'

const options = {
    method: 'GET',
    mode: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    }
}

const QUERY_URL = `/api/instagram-posts`

export default function InstagramPostsSlider () {
    const [posts, setPosts] = useState([])
    const [curPosts, setCurPosts] = useState([])
    const [index, setIndex] = useState(null)

    useEffect(() => {
        async function fetchPostData() {
            let postData = await axios.get(QUERY_URL, options).then(res => res.data.data)
            postData = postData.map((post, index)  => {
                return (<InstagramPost data={post} key={index} />);
            })
            setPosts(postData);
            setIndex(0);
        }
        fetchPostData();
    }, [])
    
    useEffect(() => {
        if (index === posts.length - 1) {
            setCurPosts([posts[index - 1], posts[index], posts[0]])
        }
        else if (index === 0) {
            setCurPosts([posts[posts.length - 1], posts[index], posts[index + 1]])
        }
        else {
            setCurPosts([posts[index - 1], posts[index], posts[index + 1]])
        }

    }, [index])

    const onClickHandler = (e, button) => {
        e.preventDefault();
    
        if (button === 'forward') {
            index < posts.length - 1 ? setIndex(index => index + 1) : setIndex(0)
        }
        else if (button == 'back') {
            index > 0 ? setIndex(index => index - 1) : setIndex(posts.length - 1)
        }
    }

    return (
        <div className='instagram-posts-container'>
            <button className='backward-posts-button' onClick={e => onClickHandler(e, 'back')}>
                <img className='back-button' src={BackArrow} />
            </button>
            <div className='current-posts-display'>
                {curPosts}
            </div>
            <button className='forward-posts-button' onClick={e => onClickHandler(e, 'forward')}>
                <img className='forward-button' src={ForwardArrow} />
            </button>
        </div>
    )
};