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