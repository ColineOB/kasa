import React, { useState } from 'react';
import jsonData from '../../Json/logements.json';
import { useSearchParams } from 'react-router-dom';
import  { Navigate } from 'react-router-dom'
import Error from '../Error/error';
import Carousel from '../../components/carousel/carousel';
import Collapse from '../../components/collapse/collapse';
import Profil from '../../components/profil/profil';
import '../../styles/index.css';

function Logement() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    let appartement = jsonData.find(el => el.id === id);

    if (appartement === undefined || appartement === null) {
        return <Navigate to='/404error'element={<Error />} />
    }

    return (
        <main>
            <Carousel images={appartement.pictures} />
            <Profil appartement={appartement} />
            <div className='collapses'>
                <Collapse title="Description" text={appartement.description} />
                <Collapse title="Équipements" text={appartement.equipments} />
            </div>
        </main>
    )
}

export default Logement;