import "./categories.css";
import { SearchOutlined, CaretRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchAndCategories = () => {
    return (
        <div>
            <Search />
            <Categories />
        </div>
    );
};

const Search = () => {
    let { searchInput } = useParams();
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        searchInput = "input:" + input;
        console.log("Search: ", input);
        navigate('/search/' + searchInput);
    }

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={submitHandler}>
                <input
                    type="search"
                    placeholder="Type your search"
                    className="search-input"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit" className="search-btn">
                    <SearchOutlined />
                </button>
            </form>
        </div>
    );
};

const Categories = () => {
    return (
        <div className="categories-container">
            <div className="categories-title">
                <p>
                    <CaretRightOutlined style={{ color: '#ff0e1f' }} />
                    Categories
                </p>
            </div>
            <div className="categories-inner">
                <ul>
                    <li><a href="/careers/backoffice">Khối BackOffice</a></li>
                    <li><a href="/careers/development">Khối Development</a></li>
                    <li><a href="/careers/marketing">Khối Marketing</a> </li>
                    <li><a href="/careers/create-design">Khối Sáng tạo/Thiết kế</a></li>
                    <li><a href="/news">Tin tức</a></li>
                    <li><a href="/careers">Tuyển dụng</a></li>
                </ul>
            </div>
        </div>
    )
};

export default SearchAndCategories;
