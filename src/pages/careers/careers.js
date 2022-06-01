import React from "react";
import  "./careers.css"
import PageStyles from "../pages.module.css"
const Careers = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <CareersTitleImage/>
            </div>
            <div>
               <CareersContent/>
            </div>
        </div>
    )
}
const CareersTitleImage = () => {
    return (
        <div className={PageStyles.titleContent} >
            <div className={PageStyles.contentTitleImg} id="careers-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Careers</div>
                </div>
            </div> 
            
        </div>
        

    )
    
}
const CareersContent = () =>{
    return (
        <div className="content-inner">
            
        </div>
    )
}


export default Careers;