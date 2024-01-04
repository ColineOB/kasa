import Fond from '../../assets/fond.jpg'
import './banner.css'

function Banner() {
    return (
        <div className='banner'>
            <img className='banner-img' src={Fond} alt='Fond' />
            <p className='banner-text'>Chez vous, partout et ailleurs</p>
        </div>
    )
}
 
export default Banner