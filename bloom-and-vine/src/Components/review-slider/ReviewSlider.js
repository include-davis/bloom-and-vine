import { useState, useEffect } from 'react'
import UserReview from './components/user-review/UserReview'
import ForwardArrow from '../../Images/forward_arrow.png'
import BackArrow from '../../Images/back_arrow.png'
import './ReviewSlider.css'

const userReviews = [
    {
        'message': "Such an exquisite day! Flowers were perfection.",
        'user': "tanweddingsandevents"
    },
    {
        'message': "Amazing designer! Would work with again.",
        'user': 'lovelydove'
    },
    {
        'message': "Great planning and overall fun to work with!",
        'user': 'daniel'
    },
    {
        'message': "I really loved the decorations for the wedding. It was amazing working with her.",
        'user': 'rachel'
    },
    {
        'message': "5/5 stars. She is worth the money!",
        'user': 'lucy'
    },
  ].map((userReview) => <UserReview review={userReview} />)


// Auto scrolling reviews?
// const autoScroll = () => {
//     setTimeout(() => {
//         index < userReviews.length - 1 ? setIndex(index => index + 1) : setIndex(0)
//     }, 5000)
// }

function getReviewDots(total) {
    let dot_display = []
    for (let i = 0; i < total; i++) {
        dot_display.push(
            <div className='review-dot' key={i}></div>
        )
    }

    return dot_display
}

function setCurrentDot(index) {
    const prevIndex = index != 0 ? index : userReviews.length;
    const curIndex = index + 1 <= userReviews.length ? index + 1 : 1;
    const prevDot = document.querySelector(`.review-dot:nth-child(${prevIndex})`)
    const curDot = document.querySelector(`.review-dot:nth-child(${curIndex})`)

    prevDot.style.backgroundColor = "#D9D9D9";
    curDot.style.backgroundColor = "#A28598";
}

export default function ReviewBar() {
    const [curReview, setCurReview] = useState(userReviews[0])
    const [index, setIndex] = useState(0)
    
    const reviewDots = getReviewDots(userReviews.length)
        
    useEffect(() => {
        setCurrentDot(index)
        setCurReview(userReviews[index])
    }, [index])
        

    // Logic: Click left or right --> Increment/Decrement Index --> Display different review
    const onClickHandler = (e, button) => {
        e.preventDefault();
    
        if (button === 'forward') {
            index < userReviews.length - 1 ? setIndex(index => index + 1) : setIndex(0)
        }
        else if (button == 'back') {
            index > 0 ? setIndex(index => index - 1) : setIndex(userReviews.length - 1)
        }
    }

    return (
        <div className='review-slider'>
            <button className='backward-review-button' onClick={e => onClickHandler(e, 'back')}>
                <img className='back-button' src={BackArrow} />
            </button>
            <div className='current-review-display'>
                {curReview}
                <div className='review-dots'>
                    {reviewDots}
                </div>
            </div>
            <button className='forward-review-button' onClick={e => onClickHandler(e, 'forward')}>
                <img className='forward-button' src={ForwardArrow} />
            </button>
        </div>
    )
}