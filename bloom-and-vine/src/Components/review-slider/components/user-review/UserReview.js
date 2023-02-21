import PurpleCircle from '../../assets/purple_circle.png'
import WhiteCircle from '../../assets/white_circle.png'
import './UserReview.css'

function fetchDots(curIndex, totalDots) {
    const dots = []

    for (let i = 0; i < totalDots; i++) {
        if (i !== curIndex) {
            dots.push(
                <li className='review-dot'>
                    <img src={WhiteCircle}/>
                </li>
            )
        }
        else {
            dots.push(
                <li className='review-dot'>
                    <img src={PurpleCircle}/>
                </li>
            )
        }
    }

    return dots
}

export default function UserReview(props) {
    const { review, curReview, totalReviews } = props;

    const dot_display = fetchDots(curReview, totalReviews)

    return (
        <div className='review-container'>
            <p className='review-text'>
                "{review.message}"
            </p>
            <p className='review-user'>
                - {review.user}
            </p>
            <ul className='review-dot-display'>
                {dot_display}
            </ul>
        </div>
    )
}