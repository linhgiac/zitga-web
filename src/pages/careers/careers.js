import React from "react";
import "./careers.css";
import PageStyles from "../pages.module.css";
import { Col, Row, Button } from "antd";
import SearchAndCategories from "../../components/categories/categories";
const Careers = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <CareersTitleImage />
            </div>
            <div>
                <CareersContent />
            </div>
        </div>
    );
};
const CareersTitleImage = () => {
    return (
        <div className={PageStyles.titleContent}>
            <div className={PageStyles.contentTitleImg} id="careers-img">
                <div className={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Careers</div>
                </div>
            </div>
        </div>
    );
};
const CareersContent = () => {
    return (
        <div className="careers-content-inner">
            <div>
                <Row>
                    <Col md={24} lg={16}>
                        <CareersMainContent />
                    </Col>
                    <Col xs={24} lg={8}>
                        <SearchAndCategories />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
const CareersMainContent = () => {
    return (
        <div className="career-main-content-container">
            <div className="careers-image-title">
                <a href="#">
                    <img src="http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg" />
                </a>
            </div>
            <div className="careers-main-content-inner">
                <div className="careers-main-content-pre-title">
                    <Button type="primary" className="careers-pre-title-btn">tuyển dụng</Button>
                </div>
                <div className="careers-main-content-title">
                    <a href="#">SENIOR GAME UX DESIGNER</a>
                </div>
                <div className="careers-main-content-post-tiltle"></div>
            </div>
        </div>
    );
};

export default Careers;
