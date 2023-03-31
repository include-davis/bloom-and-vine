import { useState } from 'react'
import ForwardArrow from '../../Images/purpleForwardArrow.png'
import BackArrow from '../../Images/purpleBackArrow.png'
import './InstagramPostsCarousel.css'

const postsDisplayed = 3;

export default function InstagramPostsCarousel (props) {
    const [centerPostIndex, setCenterPostIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const curPosts = props.data.map((post, index) => {
        return (
            <div className='curPost' key={index}>
                <a className={`${window.innerWidth <= 480 ? index === centerPostIndex ? 'active' : 'inactive' : ''}`} href={post.urls.permalink}>
                    <img className='postImg' src={post.urls.mediaURL} loading='eager'/>
                </a>
            </div>
        )
    })
    
    function touchStartHandler(e) {
        const position = e.touches[0].clientX
        setTouchStart(position)
    }

    function touchMoveHandler(e) {
        if (!touchStart) return;

        const currentTouch = e.touches[0].clientX;
        setTouchEnd(currentTouch)
    }

    function touchEndHandler(e) {
        const displacement = touchStart - touchEnd;

        // Swipe left
        if (displacement > 5) {
            centerPostIndex < curPosts.length - 1 ? setCenterPostIndex(index => index + 1) : setCenterPostIndex(0)
        }
        
        // Swipe right
        if (displacement < -5) {
            centerPostIndex > 0 ? setCenterPostIndex(index => index - 1) : setCenterPostIndex(curPosts.length - 1)
        }
    }

    const onCarouselClickHandler = (e, button) => {
        e.preventDefault();
    
        if (button === 'forward') {
            centerPostIndex < curPosts.length - postsDisplayed ? setCenterPostIndex(index => index + 1) : setCenterPostIndex(0);
        }
        else if (button === 'back') {
            centerPostIndex > postsDisplayed - 1 ? setCenterPostIndex(index => index - 1) : setCenterPostIndex(curPosts.length - postsDisplayed);
        }
    }

    return (
        <div className='instagram-posts-container'>
            <div className='current-posts-display'>
                <button className='backward-posts-button' onClick={e => onCarouselClickHandler(e, 'back')}>
                    <img className='back-button' src={BackArrow} />
                </button>
                <div className='current-posts-wrapper' onTouchStart={touchStartHandler} onTouchMove={touchMoveHandler} onTouchEnd={touchEndHandler}>
                    <div className='current-posts-content' style={{ transform: `translateX(-${centerPostIndex * (100 / postsDisplayed)}%)` }}>
                        {window.innerWidth <= 480 && curPosts[curPosts.length - 1]}
                        {curPosts}
                        {window.innerWidth <= 480 && curPosts[0]}
                    </div>
                </div>
                <button className='forward-posts-button' onClick={e => onCarouselClickHandler(e, 'forward')}>
                    <img className='forward-button' src={ForwardArrow} />
                </button>
            </div>
        </div>
    )
};