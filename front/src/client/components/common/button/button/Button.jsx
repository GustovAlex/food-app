import "./ButtonStyles.scss"
import IconButton from "../../iconButton/IconButton"

export default function Button({ text, onClick, icon }) {
    return (
        <div className='button' onClick={onClick}>
            <IconButton
                className='button-icon'
                icon={icon}
                color='#fff'
                fontSize='14px'
            />
            <p>{text}</p>
        </div>
    )
}
