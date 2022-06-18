import React from "react";
import { useState } from "react";
import "./product.css";
import PageStyles from "../pages.module.css";
import { Row, Col, Modal } from "antd";
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
                <div className={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Product</div>
                </div>
            </div>
        </div>
    );
};
const ProductContent = () => {
    return (
        <div className="product-content-inner">
            <Row justify="center">
                <Col xs={24} sm={12} md={6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2019/12/1.2.jpg" />
                        </div>
                        <div className="product-content-title">
                            <StickManLegendsModal />
                        </div>
                        <div className="product-content-description">
                            Game Zitga
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2019/12/1.jpg" />
                        </div>
                        <div className="product-content-title">
                            <EmpireWarriosModal />
                        </div>
                        <div className="product-content-description">
                            Game Zitga
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2020/05/Icon-official-1024px.png" />
                        </div>
                        <div className="product-content-title">
                            <SummonersEraModal />
                        </div>
                        <div className="product-content-description">
                            Game Zitga
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <div className="product-content-container">
                        <div className="product-content-image">
                            <img src="http://zitga.com.vn/wp-content/uploads/2020/04/thumbnail-432x360.png" />
                        </div>
                        <div className="product-content-title">
                            <ShadowKnightModal />
                        </div>
                        <div className="product-content-description">
                            Game Zitga
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
const StickManLegendsModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <a href="#" onClick={showModal}>
                STICKMAN LEGENDS
            </a>
            <Modal
                centered
                title="Zitga Studio"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <div className="product-modal-title">Stickman Legend</div>
                <div className="product-modal-video">
                    <iframe
                        className="edgtf-iframe-video fluidvids-item"
                        src="https://www.youtube.com/embed/irSMptf7MXQ?wmode=transparent"
                        width="500"
                        height="400"
                        wmode="Opaque"
                        allowfullscreen=""
                        data-fluidvids="loaded"
                    ></iframe>
                </div>
                <div className="product-modal-purchase">
                    <div className="product-modal-android">
                        <a href="https://play.google.com/store/apps/details?id=com.zitga.ninja.stickman.legends.shadow.wars">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/CHPlay-1.png"
                                alt="Android"
                            />
                        </a>
                    </div>
                    <div className="product-modal-ios">
                        <a href="https://apps.apple.com/us/app/stickman-legends-premium/id1516210313">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/AppStore.png"
                                alt="IOS"
                            />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
const EmpireWarriosModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <a href="#" onClick={showModal}>
                EMPIRE WARRIOS
            </a>
            <Modal
                centered
                title="Zitga Studio"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <div className="product-modal-title">Empire Warrios</div>
                <div className="product-modal-video">
                    <iframe
                        class="edgtf-iframe-video fluidvids-item"
                        src="https://www.youtube.com/embed/Xfcc2vKJjgg"
                        width="500"
                        height="400"
                        wmode="Opaque"
                        allowfullscreen=""
                        data-fluidvids="loaded"
                    ></iframe>
                </div>
                <div className="product-modal-purchase">
                    <div className="product-modal-android">
                        <a href="https://play.google.com/store/apps/details?id=com.zitga.empire.warriors.td.tower.defense">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/CHPlay-1.png"
                                alt="Android"
                            />
                        </a>
                    </div>
                    <div className="product-modal-ios">
                        <a href="https://apps.apple.com/us/app/empire-warriors-td-premium/id1513854092">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/AppStore.png"
                                alt="IOS"
                            />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
const SummonersEraModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <a href="#" onClick={showModal}>
                SUMMONERS ERA
            </a>
            <Modal
                centered
                title="Zitga Studio"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <div className="product-modal-title">Summoners Era</div>
                <div className="product-modal-video">
                    <iframe
                        class="edgtf-iframe-video fluidvids-item"
                        src="https://www.youtube.com/watch?v=jL247RxNuOo"
                        width="500"
                        height="400"
                        wmode="Opaque"
                        allowfullscreen=""
                        data-fluidvids="loaded"
                    ></iframe>
                </div>
                <div className="product-modal-purchase">
                    <div className="product-modal-android">
                        <a href="https://play.google.com/store/apps/details?id=com.fansipan.summoners.era.idle">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/CHPlay-1.png"
                                alt="Android"
                            />
                        </a>
                    </div>
                    <div className="product-modal-ios">
                        <a href="https://apps.apple.com/us/app/summoners-era/id1501819108">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/AppStore.png"
                                alt="IOS"
                            />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
const ShadowKnightModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <a href="#" onClick={showModal}>
                SHADOW KNIGHT
            </a>
            <Modal
                centered
                title="Zitga Studio"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <div className="product-modal-title">Shadow Knight</div>
                <div className="product-modal-video">
                    <iframe
                        class="edgtf-iframe-video fluidvids-item"
                        src="https://www.youtube.com/watch?v=OpeOTCyvaGs"
                        width="500"
                        height="400"
                        wmode="Opaque"
                        allowfullscreen=""
                        data-fluidvids="loaded"
                    ></iframe>
                </div>
                <div className="product-modal-purchase">
                    <div className="product-modal-android">
                        <a href="https://play.google.com/store/apps/details?id=com.fansipan.stickman.fight.shadow.knights">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/CHPlay-1.png"
                                alt="Android"
                            />
                        </a>
                    </div>
                    <div className="product-modal-ios">
                        <a href="https://apps.apple.com/us/app/shadow-knight/id1502347241">
                            <img
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/AppStore.png"
                                alt="IOS"
                            />
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Product;
