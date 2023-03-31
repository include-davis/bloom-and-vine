import './galleryInfo.css'

export default function GalleryInfo (props) {
    const title = props.data.title;
    const date = props.data.date;
    const desc = props.data.description;
    const level = props.level;

    return (
        <div className={`gallery-info ${level}`}>
            <div className='gallery-title'>
                {title}
            </div>
            <div className='gallery-date'>
                {date}
            </div>
            <div className='gallery-desc'>
                {desc}
            </div>
        </div>
    )
}