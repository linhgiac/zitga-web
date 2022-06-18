import React from "react";
import { useState, useEffect } from "react";
import "./news.css";
import PageStyles from "../pages.module.css";
import { Col, Row, Button, Pagination } from "antd";
import SearchAndCategories from "../../components/categories/categories";
import { NavLink, useParams } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import axios from "axios";

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
    const [data, setData] = useState(null);

    const getData = async () => {
        const response = await axios.get(
            'http://localhost/mvc/index.php?controller=news',
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

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="news-main-content-container">
            {
                data !== null &&
                <NewsList newsData={data} />
            }
        </div>
    );
};

const NewsList = ({ newsData }) => {
    const pageSize = 3;
    const [current, setCurrent] = useState(1);
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(pageSize);

    const handleChange = (page) => {
        setCurrent(page);
        setMinIndex((page - 1) * pageSize);
        setMaxIndex(page * pageSize);
    };

    const newsList = newsData.map((news, index) =>
        index >= minIndex &&
        index < maxIndex &&
        <NewsContainer key={news.id.toString()} news={news} />
    );
    return (
        <>
            {newsList}
            <Pagination
                pageSize={pageSize}
                current={current}
                total={newsData.length}
                onChange={handleChange}
            />
        </>
    )
}

const NewsContainer = ({ news }) => {
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
    const handleClick = () => {
        postId = "news-details-" + news.id;
    }
    return (
        <div className="news-container">
            <div className="news-image-title">
                <a onClick={handleClick} href={`/news/${"news-details-" + news.id}`}>
                    <img src={news.image} />
                </a>
            </div>
            <div className="news-main-content-inner">
                <div className="news-main-content-pre-title">
                    <div className="news-pre-title-btn">tin tức</div>
                </div>
                <div className="news-main-content-title">
                    <a onClick={handleClick} href={`/news/${"news-details-" + news.id}`}>{news.title}</a>
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
        </div>
    )
}



export default News;
