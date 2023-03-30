import { useState } from 'react'
import ForwardArrow from '../../Images/forward_arrow.png'
import BackArrow from '../../Images/back_arrow.png'
import './InstagramPostsCarousel.css'

export default function InstagramPostsCarousel (props) {
    const [centerPostIndex, setCenterPostIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(null)
    const curPosts = props.data;
    
    function touchStartHandler(e) {
        const position = e.touches[0].clientX
        setTouchStart(position)
    }

    function touchMoveHandler(e) {
        const touchDown = touchStart;
        if (!touchDown) return;

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        // Swipe left
        if (diff > 150) {
            centerPostIndex < curPosts.length - 3 ? setCenterPostIndex(index => index + 1) : null;
        }
        
        // Swipe right
        if (diff < -150) {
            centerPostIndex > 0 ? setCenterPostIndex(index => index - 1) : null;
        }
    }

    const onClickHandler = (e, button) => {
        e.preventDefault();
    
        if (button === 'forward') {
            centerPostIndex < curPosts.length - 3 ? setCenterPostIndex(index => index + 1) : setCenterPostIndex(0);
        }
        else if (button === 'back') {
            centerPostIndex > 2 ? setCenterPostIndex(index => index - 1) : setCenterPostIndex(curPosts.length - 3);
        }
    }

    return (
        <div className='instagram-posts-container'>
            <div className='current-posts-display'>
                <button className='backward-posts-button' onClick={e => onClickHandler(e, 'back')}>
                    <img className='back-button' src={BackArrow} />
                </button>
                <div className='current-posts-wrapper' onTouchStart={touchStartHandler} onTouchMove={touchMoveHandler}>
                    <div className='current-posts-content' style={{ transform: `translateX(-${centerPostIndex * (100 / 3)}%)` }}>
                        {curPosts}
                    </div>
                </div>
                <button className='forward-posts-button' onClick={e => onClickHandler(e, 'forward')}>
                    <img className='forward-button' src={ForwardArrow} />
                </button>
            </div>
        </div>
    )
};