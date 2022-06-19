import React, { useState, useEffect } from "react";
// import {Routes, Route} from "react-router-dom"
// import AboutUs from "../about/aboutUs";
// import Careers from '../../pages/careers/careers';
// import Contact from '../../pages/contact/contact';
// import News from '../../pages/news/news';
// import Product from '../../pages/product/product'
// import Login from '../../pages/login/login'
import BearCarousel, { BearSlideItem } from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";
import "./home.css";
import { Col, Row } from "antd";
import axios from "axios";

const Home = () => {
    return (
        <div className="home-container">
            <div>
                <HomeSlider />
                <HomeProduct />
                <HomeNews />
                <HomeCareers />
            </div>
        </div>
    );
};
const HomeSlider = () => {
    return (
        <BearCarousel
            data={bearSlideItemData}
            isEnableLoop
            isEnableNavButton
            isEnablePagination
            isDebug
            aspectRatio={{ widthRatio: 16, heightRatio: 6 }}
        />
    );
};
const sliderData = [
    {
        id: 1,
        image: "http://zitga.com.vn/wp-content/uploads/2019/11/banner1.jpg",
    },
    {
        id: 2,
        image: "http://zitga.com.vn/wp-content/uploads/2019/11/banner2.jpg",
    },
    {
        id: 3,
        image: "http://zitga.com.vn/wp-content/uploads/2019/11/banner3.jpg",
    },
    { id: 4, image: "http://zitga.com.vn/wp-content/uploads/2019/12/4.jpg" },
    { id: 5, image: "http://zitga.com.vn/wp-content/uploads/2019/12/5-2.jpg" },
];
const bearSlideItemData = sliderData.map(row => {
    return {
        key: row.id,
        children: <BearSlideItem imageUrl={row.image} />,
    };
});
const HomeProduct = () => {
    return (
        <div className="home-product-container">
            <div className="home-product-title">Game Zitga</div>
            <div className="home-product-list">
                <ul>
                    <li>
                        <div
                            style={{
                                backgroundImage:
                                    "url(http://zitga.com.vn/wp-content/uploads/2019/12/1.2.jpg)",
                            }}
                            className="home-product-element"
                        >
                            <a href="https://www.youtube.com/embed/irSMptf7MXQ?wmode=transparent"></a>
                        </div>
                    </li>
                    <li>
                        <div
                            style={{
                                backgroundImage:
                                    "url(http://zitga.com.vn/wp-content/uploads/2019/12/1.jpg)",
                            }}
                            className="home-product-element"
                        >
                            <a href="https://www.youtube.com/embed/Xfcc2vKJjgg"></a>
                        </div>
                    </li>
                    <li>
                        <div
                            style={{
                                backgroundImage:
                                    "url(http://zitga.com.vn/wp-content/uploads/2020/05/Icon-official-1024px.png)",
                            }}
                            className="home-product-element"
                        >
                            <a href="https://www.youtube.com/watch?v=jL247RxNuOo"></a>
                        </div>
                    </li>

                    <li>
                        <div
                            style={{
                                backgroundImage:
                                    "url(http://zitga.com.vn/wp-content/uploads/2020/04/thumbnail-432x360.png)",
                            }}
                            className="home-product-element"
                        >
                            <a href="https://www.youtube.com/watch?v=OpeOTCyvaGs"></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
const HomeNews = () => {
    return (
        <div className="home-news-container">
            <div className="home-news-title">
                <a href="/news">Tin tức</a>
            </div>
            <div className="home-news-list">
                <NewsList />
            </div>
        </div>
    );
};
const NewsList = () => {
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

    const newsList = data === null ? null : data.map((news, index) => (
        index < 3 &&
        <NewsContainer key={news.id.toString()} news={news} />
    ));
    return <>{newsList}</>;
};
const NewsContainer = ({ news }) => {
    return (
        <div className="home-news-element">
            <div className="home-news-img">
                <img src={news.image} />
            </div>
            <div className="home-news-element-title">
                <span>Tin tức</span> <br />
                <a href="">{news.title}</a>
            </div>
        </div>
    );
};
const HomeCareers = () => {
    return (
        <div className="home-career-container">
            <div className="home-career-title">
                Zitga Studios
            </div>
            <div className="home-career-content">
                Tìm hiểu thêm nghề nghiệp tại Zitga
            </div>
            <div className="home-career-btn">
                <a href="/careers">Tuyển dụng</a>
            </div>
        </div>
    )
};

export default Home;
