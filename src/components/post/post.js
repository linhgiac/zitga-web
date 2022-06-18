import React, { useState } from "react";
import "antd/dist/antd.css";
import "./post.css";
import { Row, Col, Comment, Avatar } from "antd";

import SearchAndCategories from "../categories/categories";
import { CaretRightOutlined } from "@ant-design/icons";

const Post = ({ app }) => {
    return (
        <div>
            <div className="post-title">
                <span>Zitga Studio</span>
            </div>
            <div className="post-content">
                <Row>
                    <Col md={24} lg={16}>
                        <PostContent />
                    </Col>
                    <Col xs={24} lg={8}>
                        <SearchAndCategories />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
const PostContent = () => {
    return (
        <div className="post-content-container">
            <PostMainContent />
            <PostComments />
        </div>
    );
};
const PostMainContent = () => {
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
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Senior Game UX Designer",
            date: `${month[current.getMonth()]
                } ${current.getDate()}, ${current.getFullYear()}`,
            details: "",
        },
    ];
    return (
        <div className="post-main-content-container">
            <div className="post-content-image">
                <img src="http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg" />
            </div>
            <div className="post-content-tags">
                <div className="post-type">
                    tuyển dụng
                    {/* nếu là News thì là tin tức */}
                </div>
                <div className="post-date">{fakeData[0].date}</div>
            </div>
            <div className="post-content-title">{fakeData[0].title}</div>
            <div className="post-main-content">
                <p>đây là content</p>

            </div>
        </div>
    );
};

const PostComments = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            content: "Haha",
        },
        {
            id: 2,
            content: "Haha",
        },
        {
            id: 3,
            content: "Haha",
        },
        {
            id: 4,
            content: "Haha",
        },
    ]);

    const submitHandler = e => {
        e.preventDefault();

        // comments logic here
        console.log("Your comment: " + comments);
    };

    return (
        <div className="post-comment">
            <div className="post-comment-list" style={{ backgroundColor: 'white' }}>
                <PostCommentList commentData={comments} />
            </div>
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
                        // onChange={e => setComment(e.target.value)}
                    />
                    <button type="submit" className="post-comment-btn">
                        Submit
                    </button>
                </form>
            </div>
            <div className="post-comment-list">
                <PostCommentList commentData={comments} />
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
    return (
        <Comment
            className="post-comment"
            author={"Han Solo"}
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
