import './InstagramPost.css'

export default function InstagramPost(props) {
    const { data } = props;
    const user = data.user;
    const caption = data.caption;
    const permalink = data.urls.permalink;
    const mediaURL = data.urls.mediaURL;
    const id = data.postInfo.id;

    function onClickHandler(e) {
        e.preventDefault();

        location.href = permalink;
    }

    return (
        <div className='curPost'>
            <img className='postImg' src={mediaURL} loading='eager' onClick={onClickHandler} />
        </div>
    );
}