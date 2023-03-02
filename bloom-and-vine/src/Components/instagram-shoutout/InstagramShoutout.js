import './InstagramShoutout.css'

export default function InstagramSlider () {
    const InstagramHandler = (e) => {
        e.preventDefault()
    
        //location.href = 'https://instagram.com'
    }

    return (
        <div className='instagram-text-display'>
            <p className='instagram-shoutout'>Check us out on Instagram!</p>
            <button className='instagram-tag' onClick={InstagramHandler}>@bloomandvine</button>
        </div>
    )
}