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
        <div className="title-content">
            <div className="content-title-img">
                <img itemprop="image" src="http://zitga.com.vn/wp-content/uploads/2019/11/rsz_tintuc.jpg" alt="Image Alt"></img>
            </div> 
            <div class="content-title-inner">
                <h3>NEWS</h3>
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