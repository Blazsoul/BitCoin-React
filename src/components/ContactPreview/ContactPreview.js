import React from 'react';

const ContactPreview = (props) => {
    return (
        <div className="flex dir-row">
        
           <div><img style={{width:'50px' ,height:'50px'}} src={props.contact.picture} alt={props.contact.picture}/></div>
            <p>{props.contact.name}</p>

        </div>
    )
}
            
export default ContactPreview;