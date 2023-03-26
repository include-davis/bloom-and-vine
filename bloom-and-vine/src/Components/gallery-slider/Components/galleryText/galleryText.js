import './galleryText.css'

export default function GalleryText (props) {
    const { title, date, desc } = props;

    return (
        <div className='gallery-text'>
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