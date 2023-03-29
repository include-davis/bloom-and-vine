import React from 'react'
import { useState, useEffect } from 'react'
import UserReview from './components/user-review/UserReview'
import ForwardArrow from '../../Images/forward_arrow.png'
import BackArrow from '../../Images/back_arrow.png'
import './ReviewSlider.css'

const userReviews = [
    {
        'message': `"Such an exquisite day! Flowers were perfection."`,
        'user': "tanweddingsandevents"
    },
    {
        'message': `"You are just consistently turning out stunning work! Your talent fountain overfloweth!!!!"`,
        'user': 'Julie A. Anderson'
    },
    {
        'message': `"Honestly, the most beautiful arrangement and you could not have been more helpful!"`,
        'user': 'Lauren Deal'
    },
    {
        'message': `"Working with you has been the easiest part of planning our wedding!"`,
        'user': 'Cynthia Racquel'
    },
    {
        'message': `"Such a beautiful color palette and such an awesome vendor team!"`,
        'user': 'kendall_melissa_events'
    },
  ].map((userReview) => <UserReview review={userReview} />)

function getReviewDots(total, setCurReviewDot) {
    let dot_display = [];
    for (let i = 0; i < total; i++) {
        dot_display.push(
            <div className='review-dot' key={i} onClick={() => setCurReviewDot(i)}></div>
        );
    }

    return dot_display;
}

function setCurrentDot(index) {
    const curIndex = index + 1 <= userReviews.length ? index + 1 : 1;
    const inactiveDots = document.querySelectorAll(`.review-dot:not(:nth-child(${curIndex}))`)
    const curDot = document.querySelector(`.review-dot:nth-child(${curIndex})`)

    for (let i = 0; i < inactiveDots.length; i++) {
        inactiveDots[i].style.backgroundColor = "#D9D9D9";
    }

    curDot.style.backgroundColor = "#A28598";
}

// Autoscroll Settings: Interval (Delay between each scroll in ms // 1000ms = 1s)
const autoScroll = false;
const autoScrollInterval = 3500;

export default function ReviewSlider() {
    const [curReviewIndex, setCurReviewIndex] = useState(0);
    const reviewDots = getReviewDots(userReviews.length, setCurReviewIndex);

    // Logic: Click left or right --> Increment/Decrement Index --> Display different review
    const reviewButtonHandler = (e, button) => {
        e.preventDefault();
    
        if (button === 'forward') {
            curReviewIndex < userReviews.length - 1 ? setCurReviewIndex(prevIndex => prevIndex + 1) : setCurReviewIndex(0);
        }
        else if (button === 'back') {
            curReviewIndex > 0 ? setCurReviewIndex(prevIndex => prevIndex - 1) : setCurReviewIndex(userReviews.length - 1);
        }
    }
    
    // AUTOSCROLLER - Will not be paused by button presses
    const autoScrollRight = () => {
        setCurReviewIndex((prevIndex) => (prevIndex + 1 < userReviews.length ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        if (!autoScroll) {
            return;
        }
        const slideInterval = setInterval(autoScrollRight, autoScrollInterval);
        return () => clearInterval(slideInterval);
    }, []);

    useEffect(() => {
        setCurrentDot(curReviewIndex);
    }, [curReviewIndex]);

    return (
        <div className='review-slider'>
            <button className='backward-review-button' onClick={e => reviewButtonHandler(e, 'back')}>
                <img className='back-button' src={BackArrow} />
            </button>
            <div className='current-review-display'>
                {userReviews[curReviewIndex]}
                <div className='review-dot-container'>
                    {reviewDots}
                </div>
            </div>
            <button className='forward-review-button' onClick={e => reviewButtonHandler(e, 'forward')}>
                <img className='forward-button' src={ForwardArrow} />
            </button>
        </div>
    );
}