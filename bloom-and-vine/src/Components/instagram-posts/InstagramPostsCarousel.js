import { useState, useEffect } from 'react'
import ForwardArrow from '../../Images/forward_arrow.png'
import BackArrow from '../../Images/back_arrow.png'
import './InstagramPostsCarousel.css'

export default function InstagramPostsCarousel (props) {
    const postData = props.data
    const [centerPostIndex, setCenterPostIndex] = useState(0)
    const [curPosts, setCurPosts] = useState([postData[postData.length - 1], postData[0], postData[1]])
    
    useEffect(() => {
        if (centerPostIndex === postData.length - 1) {
            setCurPosts([postData[centerPostIndex - 1], postData[centerPostIndex], postData[0]])
        }
        else if (centerPostIndex === 0) {
            setCurPosts([postData[postData.length - 1], postData[centerPostIndex], postData[centerPostIndex + 1]])
        }
        else {
            setCurPosts([postData[centerPostIndex - 1], postData[centerPostIndex], postData[centerPostIndex + 1]])
        }

    }, [centerPostIndex])

    const onClickHandler = (e, button) => {
        e.preventDefault();
    
        if (button === 'forward') {
            centerPostIndex < postData.length - 1 ? setCenterPostIndex(index => index + 1) : setCenterPostIndex(0)
        }
        else if (button === 'back') {
            centerPostIndex > 0 ? setCenterPostIndex(index => index - 1) : setCenterPostIndex(postData.length - 1)
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