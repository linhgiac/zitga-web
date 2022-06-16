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
            id: 1,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2022/05/11-1.jpg",
            title: "[OUR BELOVED SPRING] CHUYẾN ĐI DÀNH CHO NHỮNG TÂM HỒN RỰC CHÁY",
            date: `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 2,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2022/05/11-1.jpg",
            title: "[OUR BELOVED SUMMER] CHUYẾN ĐI DÀNH CHO NHỮNG TÂM HỒN RỰC CHÁY",
            date: `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 3,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2022/05/11-1.jpg",
            title: "[OUR BELOVED AUTUMN] CHUYẾN ĐI DÀNH CHO NHỮNG TÂM HỒN RỰC CHÁY",
            date: `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 4,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2022/05/11-1.jpg",
            title: "[OUR BELOVED WINTER] CHUYẾN ĐI DÀNH CHO NHỮNG TÂM HỒN RỰC CHÁY",
            date: `${month[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`,
        },
    ];

    return (
        <div className="news-main-content-container">
            {/* <div className="news-image-title">
                <a href="#">
                    <img src={fakeData[0].imgSrc} />
                </a>
            </div>
            <div className="news-main-content-inner">
                <div className="news-main-content-pre-title">
                    <div className="news-pre-title-btn">tin tức</div>
                </div>
                <div className="news-main-content-title">
                    <a href="/news/news-details-01">{fakeData[0].title}</a>
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
            </div> */}
            <NewsList newsData={fakeData} />
        </div>
    );
};

const NewsList = ({ newsData }) => {
    const newsList = newsData.map((news) =>
        <NewsContainer key={news.id.toString()} news={news} />
    );
    return (
        <>{newsList}</>
    )
}

const NewsContainer = ({ news }) => {
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
        <>
            <div className="news-image-title">
                <a href="#">
                    <img src={news.imgSrc} />
                </a>
            </div>
            <div className="news-main-content-inner">
                <div className="news-main-content-pre-title">
                    <div className="news-pre-title-btn">tin tức</div>
                </div>
                <div className="news-main-content-title">
                    <a href="/news/news-details-01">{news.title}</a>
                </div>
                <div className="news-main-content-post-tiltle">
                    <div className="news-post-left">
                        <NavLink className="news-post-left-element" to="#">
                            {news.date}
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
        </>
    )
}



export default News;
