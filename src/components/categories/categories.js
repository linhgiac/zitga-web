import "./categories.css";
import { SearchOutlined,CaretRightOutlined} from "@ant-design/icons";

const SearchAndCategories = () => {
    return (
        <div>
            <Search />
            <Categories/>
        </div>
    );
};

const Search = () => {
    return (
        <div className="search-container">
            <form className="search-form">
                <input
                    type="search"
                    placeholder="Type your search"
                    className="search-input"
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
                <CaretRightOutlined style = {{color: '#ff0e1f'}} />
                    Categories
                </p>
            </div>
            <div className="categories-inner">
                <ul>
                    <li><a href="">Khối BackOffice</a></li>
                    <li><a href="">Khối Development</a></li>
                    <li><a href="">Khối Marketing</a> </li>
                    <li><a href="">Khối Sáng tạo/Thiết kế</a></li>
                    <li><a href="">Tin tức</a></li>
                    <li><a href="">Tuyển dụng</a></li>
                </ul>
            </div>
        </div>
    )
};

export default SearchAndCategories;
