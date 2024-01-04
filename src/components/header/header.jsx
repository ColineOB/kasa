import Logo from '../../assets/LOGO.png'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header-logo' src={Logo} alt='Logo' />
            <ul className='header-menu'>
                <li><Link to='/' >Accueil</Link></li>
                <li><Link to='/aPropos' >A Propos</Link></li>
            </ul>

        </div>
    )
}
 
export default Header