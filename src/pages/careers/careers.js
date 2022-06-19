import React from "react";
import { useState, useEffect } from "react";
import "./careers.css";
import PageStyles from "../pages.module.css";
import { Col, Row, Button, Pagination } from "antd";
import SearchAndCategories from "../../components/categories/categories";
import { NavLink, useParams } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";

const Careers = ({ app }) => {
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
                    <div className={PageStyles.title}>
                        {window.location.pathname === "/careers" && (
                            <>Tuyển dụng</>
                        )}
                        {window.location.pathname === "/careers/create-design" && (
                            <>Khối Sáng tạo/ Thiết kế</>
                        )}
                        {window.location.pathname === "/careers/marketing" && (
                            <>Khối Marketing</>
                        )}
                        {window.location.pathname === "/careers/development" && (
                            <>Khối Development</>
                        )}
                        {window.location.pathname === "/careers/backoffice" && (
                            <>Khối BackOffice</>
                        )}
                    </div>
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
    const [data, setData] = useState(null);

    const getData = async (category) => {
        const action = category === "" ? "index" : "filter";
        const data = JSON.stringify({ category: category });
        const response = await axios.post(
            `http://localhost/mvc/index.php?controller=recruitment&action=${action}`,
            data,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            }).then((value) => value.data);

        console.log("Response data: ", response);
        console.log("Updated");
        setData(response);
    }

    const [count, setCount] = useState(0);
    const [isLike, setIsLike] = useState(false);
    const handleLiked = () => {
        setIsLike(!isLike);
        if (isLike) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
    };

    useEffect(() => {
        if (window.location.pathname === "/careers/create-design") {
            getData("Khối Sáng tạo/ Thiết kế");
        }
        else if (window.location.pathname === "/careers/marketing") {
            getData("Khối Marketing");
        }
        else if (window.location.pathname === "/careers/development") {
            getData("Khối Development");
        }
        else if (window.location.pathname === "/careers/backoffice") {
            getData("Khối BackOffice");
        }
        else {
            getData("");
        }

    }, []);

    return (
        <div className="careers-main-content-container">
            {
                data !== null &&
                <CareersList careersData={data} />
            }
        </div>
    );
};

const CareersList = ({ careersData }) => {
    const pageSize = 3;
    const [current, setCurrent] = useState(1);
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(pageSize);

    const handleChange = (page) => {
        setCurrent(page);
        setMinIndex((page - 1) * pageSize);
        setMaxIndex(page * pageSize);
    };


    const careersList = careersData.map((career, index) => (
        index >= minIndex &&
        index < maxIndex &&
        <CareerContainer key={career.id.toString()} career={career} />
    ));
    return <>
        {careersList}
        {
            careersData.length > 0 &&
            <Pagination
                pageSize={pageSize}
                current={current}
                total={careersData.length}
                onChange={handleChange}
            />
        }
    </>;
};

const CareerContainer = ({ career }) => {
    let { postId } = useParams();
    const [count, setCount] = useState(0);
    const [isLike, setIsLike] = useState(false);
    const handleLiked = () => {
        setIsLike(!isLike);
        if (isLike) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
    };
    const handleClicked = () => {
        postId = "careers-details-" + career.id;
    }
    return (
        <div className="careers-container">
            <div className="careers-image-title">
                <a href={`/careers/careers-details-${career.id}`} onClick={handleClicked}>
                    <img src={career.image} />
                </a>
            </div>
            <div className="careers-main-content-inner">
                <div className="careers-main-content-pre-title">
                    <div className="careers-pre-title-btn">tuyển dụng</div>
                </div>
                <div className="careers-main-content-title">
                    <a href={`/careers/careers-details-${career.id}`} onClick={handleClicked}>{career.title}</a>
                </div>
                <div className="careers-main-content-post-tiltle">
                    <div className="careers-post-left">
                        <NavLink className="careers-post-left-element" to="#">
                            {career.date}
                        </NavLink>

                        <div className="careers-post-left-like">
                            <HeartFilled
                                onClick={handleLiked}
                                style={{ color: "#ff0e1f" }}
                            />
                            <span>{count}</span>
                        </div>
                    </div>
                    <div className="careers-post-right">
                        <div className="careers-post-right-element">
                            by admin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
