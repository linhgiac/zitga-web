import React from "react";
import "./product.css";
import PageStyles from "../pages.module.css";
import { Row, Col } from "antd";
const Product = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <ProductTitleImage />
            </div>
            <div>
                <ProductContent />
            </div>
        </div>
    );
};
const ProductTitleImage = () => {
    return (
        <div className={PageStyles.titleContent}>
            <div className={PageStyles.contentTitleImg} id="product-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Product</div>
                </div>
            </div>
        </div>
    );
};
const ProductContent = () => {
    return (
        <div className="product-content-inner">
            <Row justify='center'>
                <Col xs={24} sm = {12} md = {6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2019/12/1.jpg" />
                        </div>
                        <div className="product-content-title">Product</div>
                        <div className="product-content-description">
                            Product description
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm = {12} md = {6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2019/12/1.jpg" />
                        </div>
                        <div className="product-content-title">Product</div>
                        <div className="product-content-description">
                            Product description
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm = {12} md = {6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2019/12/1.jpg" />
                        </div>
                        <div className="product-content-title">Product</div>
                        <div className="product-content-description">
                            Product description
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm = {12} md = {6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2019/12/1.jpg" />
                        </div>
                        <div className="product-content-title">Product</div>
                        <div className="product-content-description">
                            Product description
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Product;
