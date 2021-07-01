import "./footerStyles.scss"
import IconButton from "../../common/iconButton/IconButton"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrap'>
                <div className='footer-wrap-item'>
                    <IconButton icon={faPhoneAlt} fontSize='14px' />
                    <p className='footer-wrap-item-text'>(097) 70-21-888</p>
                </div>
                <div className='footer-wrap-item'>
                    <IconButton icon={faEnvelope} fontSize='14px' />
                    <a
                        className='footer-wrap-item-link'
                        href='https://mail.google.com/mail/u/0/#all?compose=new'
                        target='blank'>
                        easyfoodzp@gmail.com
                    </a>
                </div>
                <div className='footer-wrap-item'>
                    <a
                        href='https://web.telegram.org/k/'
                        target='blank'
                        className='footer-wrap-item-link'>
                        <IconButton icon={faTelegramPlane} fontSize='18px' />
                    </a>
                    <a
                        href='https://www.facebook.com/'
                        target='blank'
                        className='footer-wrap-item-link'>
                        <IconButton icon={faFacebookSquare} fontSize='18px' />
                    </a>
                    <a
                        href='https://web.telegram.org/k/'
                        href='https://www.instagram.com/?hl=ru'
                        target='blank'
                        className='footer-wrap-item-link'>
                        <IconButton icon={faInstagramSquare} fontSize='18px' />
                    </a>
                </div>
            </div>
        </div>
    )
}
