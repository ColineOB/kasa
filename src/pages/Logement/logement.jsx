
import jsonData from '../../Json/logements.json';
import { useSearchParams } from 'react-router-dom';
import  { Navigate } from 'react-router-dom'
import Error from '../Error/error';

function Logement() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    let appartement = jsonData.find(el => el.id === id)
    if (appartement === undefined || appartement === null) {
        return <Navigate to='/404error'element={<Error />} />
    } 

    return (
        <>
        <h1>{appartement.title}</h1>
        <h2>{appartement.location}</h2>
        <div>
            <p>{appartement.host.name}</p>
            <img src={appartement.host.picture} alt={appartement.host.name} />
        </div>
        {appartement.tags.map((tag) => (
            <p key={tag}>{tag}</p>
        ))}
        </>
    )
}

export default Logement;