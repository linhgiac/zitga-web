import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./post.css";
import { Row, Col, Comment, Avatar } from "antd";

import SearchAndCategories from "../categories/categories";
import { CaretRightOutlined } from "@ant-design/icons";
import axios from "axios";

const Post = ({ app }) => {
    return (
        <div>
            <div className="post-title">
                <span>Zitga Studio</span>
            </div>
            <div className="post-content">
                <Row>
                    <Col md={24} lg={16}>
                        <PostContent app={app} />
                    </Col>
                    <Col xs={24} lg={8}>
                        <SearchAndCategories />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
const PostContent = ({ app }) => {
    return (
        <div className="post-content-container">
            <PostMainContent />
            {
                window.location.pathname.includes("news") &&
                <PostComments app={app} />
            }
        </div>
    );
};
const PostMainContent = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        let path = window.location.pathname;
        let pathSplit = path.split('-');
        let type = "";
        let typeText = "";
        if (pathSplit[0].includes("news")) {
            type = "news";
            typeText = "Tin tức";
        } else if (pathSplit[0].includes("careers")) {
            type = "recruitment";
            typeText = "Tuyển dụng";
        }
        let id = pathSplit[pathSplit.length - 1];
        console.log("Type: ", type);
        console.log("Id: ", id);

        const dataSend = JSON.stringify({ id: id });
        const response = await axios.post(
            `http://localhost/mvc/index.php?controller=${type}&action=show`,
            dataSend
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        console.log(response.data[0]);

        setData({ ...response.data[0], type: typeText })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {
                data !== null &&
                <div className="post-main-content-container">
                    <div className="post-content-image">
                        <img src={data.image} />
                    </div>
                    <div className="post-content-tags">
                        <div className="post-type">
                            {data.type}
                        </div>
                        <div className="post-date">{data.date}</div>
                    </div>
                    <div className="post-content-title">{data.title}</div>
                    <div className="post-main-content">
                        <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
                    </div>
                </div>
            }
        </>
    );
};

const PostComments = ({ app }) => {
    const [comment, setComment] = useState("");
    const [data, setData] = useState([]);
    const [news_id, setNewsId] = useState(1);
    const [maxId, setMaxId] = useState(1);
    const [dataUpdated, setDataUpdated] = useState(true);

    const getData = async () => {
        let path = window.location.pathname;
        let pathSplit = path.split('-');
        let id = pathSplit[pathSplit.length - 1];
        setNewsId(id);
        console.log("Get Comments News Id: ", id);

        const dataSend = JSON.stringify({ news_id: id });
        const response = await axios.post(
            `http://localhost/mvc/index.php?controller=comment`,
            dataSend
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        console.log("Comment Data: ", response.data);
        setData(response.data);
        setMaxId(parseInt(response.data[response.data.length - 1].id));
        setDataUpdated(false);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log("Your comment: ", comment);
        const dataSend = JSON.stringify({
            id: maxId + 1,
            news_id: news_id,
            user_id: app.user.id,
            content: comment,

        });
        console.log("Data comment: ", dataSend);
        const response = await axios.post(
            `http://localhost/mvc/index.php?controller=comment&action=store`,
            dataSend
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        console.log(response.data);
        setComment("");
        setDataUpdated(true);
    };

    useEffect(() => {
        if (dataUpdated) {
            getData();
        }
    }, [dataUpdated])

    return (
        <div className="post-comment">
            <div className="post-comment-title">
                <p>
                    <CaretRightOutlined style={{ color: "#ff0e1f" }} />
                    Add comment
                </p>
            </div>
            <div className="post-comment-form">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        className="post-comment-input"
                        placeholder='"Your comment", nếu chưa login thì là "Bạn phải login mới có thể bình luận"'
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                    />
                    <button type="submit" className="post-comment-btn">
                        Submit
                    </button>
                </form>
            </div>
            <div className="post-comment-list">
                <PostCommentList commentData={data} />
            </div>
        </div>
    );
};

const PostCommentList = ({ commentData }) => {
    const commentList = commentData.map(comment => (
        <PostComment key={comment.id.toString()} comment={comment} />
    ));
    return <>{commentList}</>;
};

const PostComment = ({ comment }) => {
    const [userData, setUserData] = useState({ name: 'Loading', avatar: '' });
    const getUserData = async () => {
        const dataSend = JSON.stringify({ id: comment.user_id });
        const response = await axios.post(
            `http://localhost/mvc/index.php?controller=user&action=show`,
            dataSend
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        setUserData(response.data[0]);
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <Comment
            className="post-comment"
            author={userData.name}
            avatar={
                <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                />
            }
            content={<p>{comment.content}</p>}
        />
    );
};
export default Post;
