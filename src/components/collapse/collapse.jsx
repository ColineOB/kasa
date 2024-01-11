import './collapse.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({title, text}) {
    const [isOpen, SetIsOpen] = useState(false);
    
    return (
        <div className='collapse'>
            <div className='collapse-title'>
                <h2>{title}</h2>
                <FontAwesomeIcon onClick={SetIsOpen} icon={faChevronDown} />
            </div>
            <div className='collapse-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Collapse