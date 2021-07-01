import starImg from "../../../img/Star.svg"
import "./markerStyles.scss"

export default function Marker({ text }) {
    return (
        <div className='marker'>
            <img className='marker-img' src={starImg} alt='img' />
            <p className='marker-text'>{text}</p>
        </div>
    )
}
