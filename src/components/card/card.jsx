import './card.css'
import {Link} from 'react-router-dom'

function Card(props) {
    const title = props.data.title;
    const cover = props.data.cover;
    const id = props.data.id;

    return (
        <article className='card'>
        <Link to={"/logement?id="+ id}>
            <img src={cover} alt="cover" />
            <div className='gradient'></div>
            <p>{title}</p>
        </Link>
        </article>
    )
}
 
export default Card