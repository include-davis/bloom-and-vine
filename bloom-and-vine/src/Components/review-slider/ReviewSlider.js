import { useState, useEffect } from 'react'
import UserReview from '../user-review/UserReview'
import ForwardArrow from './logos/forward_arrow.png'
import BackArrow from './logos/back_arrow.png'
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
  ].map((userReview, index) => <UserReview review={userReview} curReview={index} totalReviews={5} />)
  
export default function ReviewBar() {
    const [curReview, setCurReview] = useState(userReviews[0])
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
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

    // Maybe implement automatic transition scrolling
    // Still need to implement dot display somehow...
    return (
        <div className='review-slider'>
            <button id='backward-button' onClick={e => onClickHandler(e, 'back')}>
                <img className='back-button' src={BackArrow} />
            </button>
            <div id='current-review-display'>
                {curReview}
            </div>
            <button id='forward-button' onClick={e => onClickHandler(e, 'forward')}>
                <img className='forward-button' src={ForwardArrow} />
            </button>
        </div>
    )
}