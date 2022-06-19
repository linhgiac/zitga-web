import React from "react";
import "./searchPage.css";

const SearchPage = () => {
    const fakeDataSearch = [{ search: "test" }];
    const fakeDataResults = [{ title: "result1" }, { title: "result2" },  { title: "result3" },  { title: "result3" }];
    return (
        <div className="search-page-container">
            <div className="search-page-title">
                <p>{`Kết quả tìm kiếm cho: ${fakeDataSearch[0].search}`}</p>
            </div>
            <div className="search-page-results">
                <div className="search-page-result-item">
                    <div className="search-page-result-page">
                        <p>News</p>
                        <div className="search-page-result-link">
                            <a href="#">{fakeDataResults[0].title}</a>
                        </div>
                        <div className="search-page-result-link">
                            <a href="#">{fakeDataResults[1].title}</a>
                        </div>
                    </div>

                    <div className="search-page-result-page">
                        <p>Careers</p>
                        <div className="search-page-result-link">
                            <a href="#">{fakeDataResults[2].title}</a>
                        </div>
                        <div className="search-page-result-link">
                            <a href="#">{fakeDataResults[3].title}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
