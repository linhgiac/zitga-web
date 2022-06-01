import React from "react";
import  "./contact.css"
import PageStyles from "../pages.module.css"
const Contact = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <ContactTitleImage/>
            </div>
            <div>
               <ContactContent/>
            </div>
        </div>
    )
}
const ContactTitleImage = () => {
    return (
        <div className={PageStyles.titleContent} >
            <div className={PageStyles.contentTitleImg} id="contact-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Contact</div>
                </div>
            </div> 
            
        </div>
        

    )
    
}
const ContactContent = () =>{
    return (
        <div className="content-inner">
            
        </div>
    )
}


export default Contact;