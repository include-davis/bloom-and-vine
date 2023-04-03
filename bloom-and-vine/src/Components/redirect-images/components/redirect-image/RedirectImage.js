import './RedirectImage.css'

export default function RedirectImage(props) {
    const { redirect, img } = props;

    return (
        <div className='image-container'>
            <div className='image-background' id={redirect}>
                <p className='image-text'>
                    {redirect}
                </p>
            </div>
            <a href={`/${redirect}`}>
                <img className='image-redirect' src={img} loading='eager'/>
            </a>
        </div>
    )
}