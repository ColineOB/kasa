import Rate from "../rating/rate";

function Profil({appartement}) {
    const tags = appartement.tags;

    return (
        <div className='profil'>
            <div>
                <h1>{appartement.title}</h1>
                <h2>{appartement.location}</h2>
                <div className='rating_tags'>
                {tags.map((tag, index) => (
                    <p className='rating_tags--tag' key={0+index}>{tag}</p>
                ))}
                </div>
            </div>
            <div className='profil-rate'>
                <div className='profil_G'>
                    <p className='profil_G--name'>{appartement.host.name}</p>
                    <img className='profil_G--imgProfil' src={appartement.host.picture} alt={appartement.host.name} />
                </div>
                
                <Rate rating={appartement.rating} />
            </div>
        </div>
    )
}

export default Profil