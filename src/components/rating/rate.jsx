import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/index.css'

function Rate({rating}) {
    const rate = []
    let rateVoid = 5 - rating;
    for (let i = 0; i < rating ; i++) {
        rate.push(<FontAwesomeIcon key={`star_rate_${i}`} className='star star_rate' icon={faStar} />)
    }
    for (let i = 0; i < rateVoid; i++) {
        rate.push(<FontAwesomeIcon key={`star_void_${i}`} className='star star_void' icon={faStar} />)
    }

    return (
        <div className='rating_rate'>
            {rate}
        </div>
    )

}

export default Rate