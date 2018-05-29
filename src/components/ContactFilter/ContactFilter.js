import React from 'react';

const ContactFilter = (props) => {
    const handleInput = ({target}) => {
        if (typeof props.onInput === 'function') {
            props.onInput(target.value);
        }
    }
    return (
        <div className="contact-search">
            <input className="search-input" placeholder="Search..." onInput={handleInput}/>
        </div>
    )
}
            
export default ContactFilter;