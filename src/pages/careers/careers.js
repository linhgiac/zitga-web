import React from "react";
import { useState } from "react";
import "./careers.css";
import PageStyles from "../pages.module.css";
import { Col, Row, Button, Pagination } from "antd";
import SearchAndCategories from "../../components/categories/categories";
import { NavLink, useParams } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";

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
    const current = new Date();
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Get Data from Backend
    const fakeData = [
        {
            id: 1,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Senior Game UX Designer",
            date: `${month[current.getMonth()]
                } ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 2,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Junior Game UX Designer",
            date: `${month[current.getMonth()]
                } ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 3,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Fresher Game UX Designer",
            date: `${month[current.getMonth()]
                } ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 4,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Intern Game UX Designer",
            date: `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 5,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Chicken Game UX Designer",
            date: `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`,
        },
    ];
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

    return (
        <div className="careers-main-content-container">
            <CareersList careersData={fakeData} />

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
        <Pagination
            pageSize={pageSize}
            current={current}
            total={careersData.length}
            onChange={handleChange}
        />
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
                    <img src={career.imgSrc} />
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
