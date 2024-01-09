import './collapse.css'
import { useState } from 'react'

function Collapse({title, text}) {
    const [isOpen, SetIsOpen] = useState(false);
    
    return (
        <div className='collapse'>
            <div className='collapse-title'>
                <h2>{title}</h2>
                <button onClick={SetIsOpen}>^</button>
            </div>
            <div className='collapse-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Collapse