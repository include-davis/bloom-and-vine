import PurpleCircle from './logos/purple_circle.png'
import WhiteCircle from './logos/white_circle.png'
import './UserReview.css'

export default function UserReview(props) {
    const { review, curReview, totalReviews } = props;

    let dot_display = []

    for (let i = 0; i < totalReviews; i++) {
        if (i !== curReview) {
            dot_display.push(
                <li className='review-dot'>
                    <img src={WhiteCircle}/>
                </li>
            )
        }

        else {
            dot_display.push(
                <li className='review-dot'>
                    <img src={PurpleCircle}/>
                </li>
            )
        }
    }

    return (
        <div className='review-container'>
            <div className='review-text'>
                {review.message}
            </div>
            <div className='review-user'>
                - {review.user}
            </div>
            <ul className='review-dot-display'>
                {dot_display}
            </ul>
        </div>
    )
}