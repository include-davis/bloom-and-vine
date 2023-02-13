import './Review.css'

export default function UserReview(props) {
    const { review } = props;
    return(
        <div className='review-container'>
            <p className='review-text'>
                "{review.comment}"
            </p>
            <p className='review-user'>
                - {review.user}
            </p>
        </div>
    )
}