import React from "react";
import  "./about.css"
import PageStyles from "../pages.module.css"
const AboutUs = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <AboutUsTitleImage/>
            </div>
            <div>
               <AboutUsContent/>
            </div>
        </div>
    )
}
const AboutUsTitleImage = () => {
    return (
        <div className={PageStyles.titleContent} >
            <div className={PageStyles.contentTitleImg} id="aboutUs-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>About Us</div>
                </div>
            </div> 
            
        </div>
        

    )
    
}
const AboutUsContent = () =>{
    return (
        <div className="content-inner">
            
        </div>
    )
}


export default AboutUs;