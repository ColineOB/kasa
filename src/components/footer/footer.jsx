import LogoWhite from '../../assets/LOGO2.png'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
        <img className='footer-img' src={LogoWhite} alt='Logo' />
        <div className='footer-copyright'>© 2020 Kasa. All rights reserved</div>
        </div>
    )
}
 
export default Footer