import './banner.css'
import {useLocation} from 'react-router-dom'

function Banner() {
    const location = useLocation();
    if (location.pathname === "/aPropos") {
        return (
            <div className='banner'>
                <div className='banner-container_apropos'></div>
            </div>
        )

    } else {
        return (
            <div className='banner'>
            <div className='banner-filter'>
            </div>
            <div className='banner-container'></div>
    
                <p>Chez vous, partout et ailleurs</p>
            </div>
        )
    }
}
 
export default Banner