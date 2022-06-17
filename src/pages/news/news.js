import React from "react";
import { useState } from "react";
import "./news.css";
import PageStyles from "../pages.module.css";
import { Col, Row, Button } from "antd";
import SearchAndCategories from "../../components/categories/categories";
import { NavLink } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
const News = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <NewsTitleImage />
            </div>
            <div>
                <NewsContent />
            </div>
        </div>
    );
};
const NewsTitleImage = () => {
    return (
        <div className={PageStyles.titleContent}>
            <div className={PageStyles.contentTitleImg} id="news-img">
                <div className={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>News</div>
                </div>
            </div>
        </div>
    );
};
const NewsContent = () => {
    return (
        <div className="news-content-inner">
            <div>
                <Row>
                    <Col md={24} lg={16}>
                        <NewsMainContent />
                    </Col>
                    <Col xs={24} lg={8}>
                        <SearchAndCategories />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
const NewsMainContent = () => {
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
    const fakeData = [
        {
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2022/05/11-1.jpg",
            title: "[OUR BELOVED SUMMER] CHUYẾN ĐI DÀNH CHO NHỮNG TÂM HỒN RỰC CHÁY",
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
        <div className="news-container">
            <div className="news-image-title">
                <a href={`/news/news-details-${news.id}`}>
                    <img src={news.imgSrc} />
                </a>
            </div>
            <div className="news-main-content-inner">
                <div className="news-main-content-pre-title">
                    <div className="news-pre-title-btn">tin tức</div>
                </div>
                <div className="news-main-content-title">
                    <a href={`/news/news-details-${news.id}`}>{news.title}</a>
                </div>
                <div className="news-main-content-post-tiltle">
                    <div className="news-post-left">
                        <NavLink className="news-post-left-element" to="#">
                            {fakeData[0].date}
                        </NavLink>

                        <div className="news-post-left-like">
                            <HeartFilled
                                onClick={handleLiked}
                                style={{ color: "#ff0e1f" }}
                            />
                            <span>{count}</span>
                        </div>
                    </div>
                    <div className="news-post-right">
                        <div className="news-post-right-element">
                            by admin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
