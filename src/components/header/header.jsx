import Logo from '../../assets/LOGO.png'
import {Link, useLocation} from 'react-router-dom'
import './header.css'

function Header() {
    const path = useLocation().pathname;

    function menuPath(link, name) {
        if (path === link ) {
            return <div className='underligne'>{name}</div>
        } else {
            return <Link to= {link} >{name}</Link>
        }
    }

    return (
        <div className='header'>
            <img className='header-logo' src={Logo} alt='Logo' />
            <ul className='header-menu'>
                <li>{menuPath('/','Accueil')}</li>
                <li>{menuPath('/aPropos','A Propos')}</li>
            </ul>

        </div>
    )
}
 
export default Header