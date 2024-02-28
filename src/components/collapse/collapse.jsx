import './collapse.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({title, text}) {
    const [isOpen, SetIsOpen] = useState(false);

    function handleClick() {
        SetIsOpen(!isOpen)
    }

    return (
            <section className='collapse-div'>
                <div className='collapse-title'>
                    <h2>{title}</h2>
                    <FontAwesomeIcon className={isOpen ? 'collape-arrow': 'collape-arrow reverse close'} onClick={handleClick} icon={faChevronDown} />
                </div>
                <div className={isOpen ? 'collapse-text':'collapse-text_close'}>
                    { typeof(text) === 'object' ?
                    <ul>
                        {text.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    </ul>
                    :
                    <p>{text}</p>

                    }
                </div>
            </section>
    )
}
export default Collapse