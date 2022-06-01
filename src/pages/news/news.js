import React from "react";
import '../pages.css'
const News = () => {
    return (
        <div className="content">
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
        <div className="title-content" >
            <div className="content-title-img">
                <div class="content-title-inner">
                    <div className="title">NEWS</div>
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