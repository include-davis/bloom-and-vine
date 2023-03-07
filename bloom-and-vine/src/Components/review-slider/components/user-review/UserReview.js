import PurpleCircle from './logos/purple_circle.png'
import WhiteCircle from './logos/white_circle.png'
import './UserReview.css'

export default function UserReview(props) {
    const { review } = props;

    return (
        <div className='review-container'>
            <div className='review-text'>
                {review.message}
            </div>
            <div className='review-user'>
                - {review.user}
            </div>
        </div>
    )
}