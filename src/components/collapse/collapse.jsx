import './collapse.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({title, text}) {
    const [isOpen, SetIsOpen] = useState(false);
    let textFinal = ''

    function handleClick() {
        SetIsOpen(!isOpen)
    }
    if (typeof(text) === 'object') {
        for (let i = 0; i < text.length; i++) {
            textFinal += text[i] + '\n'
        }
    } else {
        textFinal = text
    }

    return (
            <div className='collapse-div'>
                <div className='collapse-title'>
                    <h2>{title}</h2>
                    <FontAwesomeIcon className={isOpen ? 'collape-arrow': 'collape-arrow reverse close'} onClick={handleClick} icon={faChevronDown} />
                </div>
                <div className={isOpen ? 'collapse-text':'collapse-text_close'}>
                    <p>{textFinal}</p>
                </div>
            </div>
    )
}
export default Collapse