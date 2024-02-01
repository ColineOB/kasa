import React, { useState } from 'react';
import jsonData from '../../Json/logements.json';
import { useSearchParams } from 'react-router-dom';
import  { Navigate } from 'react-router-dom'
import Error from '../Error/error';
import Carousel from '../../components/carousel/carousel';
import Collapse from '../../components/collapse/collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../../styles/index.css'

function Logement() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    let appartement = jsonData.find(el => el.id === id);

    if (appartement === undefined || appartement === null) {
        return <Navigate to='/404error'element={<Error />} />
    }
    const tags = appartement.tags;
    const rate = []
    let rateVoid = 5 - appartement.rating;
    for (let i = 0; i < appartement.rating ; i++) {
        rate.push(<FontAwesomeIcon  className='star star_rate' icon={faStar} />)
    }
    for (let i = 0; i < rateVoid; i++) {
        rate.push(<FontAwesomeIcon  className='star star_void' icon={faStar} />)
        
    }

    return (
        <>
        <Carousel images={appartement.pictures} />
        <div className='profil'>
            <div>
                <h1>{appartement.title}</h1>
                <h2>{appartement.location}</h2>
                <div className='rating_tags'>
                {tags.map((tag, index) => (
                    <p className='rating_tags--tag' key={index}>{tag}</p>
                ))}
                </div>
            </div>
            <div className='profil-rate'>
                <div className='profil_G'>
                    <p className='profil_G--name'>{appartement.host.name}</p>
                    <img className='profil_G--imgProfil' src={appartement.host.picture} alt={appartement.host.name} />
                </div>
                
                <div className='rating_rate'>
                        {rate}
                </div>
            </div>
            
        </div>
        <div className='collapses'>
        <Collapse title="Description" text={appartement.description} />
        <Collapse title="Équipements" text={appartement.equipments} />
        </div>
        </>
    )
}

export default Logement;