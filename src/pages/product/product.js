import React from "react";
import  "./product.css"
import PageStyles from "../pages.module.css"
const Product = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <ProductTitleImage/>
            </div>
            <div>
               <ProductContent/>
            </div>
        </div>
    )
}
const ProductTitleImage = () => {
    return (
        <div className={PageStyles.titleContent} >
            <div className={PageStyles.contentTitleImg} id="product-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Product</div>
                </div>
            </div> 
            
        </div>
        

    )
    
}
const ProductContent = () =>{
    return (
        <div className="content-inner">
            
        </div>
    )
}


export default Product;