import './card.css'
import {Link} from 'react-router-dom'

function Card(props) {
    const title = props.data.title;
    const cover = props.data.cover;
    const id = props.data.id;

    return (
        <div className='card'>
        <Link to={"/logement?id="+ id}>
            <p>{title}</p>
            <img src={cover} alt="cover" />
        </Link>
        </div>
    )
}
 
export default Card