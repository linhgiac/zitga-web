import React from "react";
import  "./news.css"
import PageStyles from "../pages.module.css"
const News = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <NewsTitleImage/>
            </div>
            <div>
               <NewsContent/>
            </div>
        </div>
    )
}
const NewsTitleImage = () => {
    return (
        <div className={PageStyles.titleContent} >
            <div className={PageStyles.contentTitleImg} id="news-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>NEWS</div>
                </div>
            </div> 
            
        </div>
        

    )
    
}
const NewsContent = () =>{
    return (
        <div className="content-inner">
            
        </div>
    )
}


export default News;