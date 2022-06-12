import React from "react";
import "./careers.css";
import PageStyles from "../pages.module.css";
import { Col, Row } from "antd";
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
        <div className="career-content-inner">
            <Row>
                <Col md={24} lg={16}>
                    <CareersMainContent />
                </Col>
                <Col xs={24} lg={8}>
                    <SearchAndCategories />
                </Col>
            </Row>
        </div>
    );
};
const CareersMainContent = () => {
    
};

export default Careers;
