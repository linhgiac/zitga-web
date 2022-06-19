import React from "react";
import "./searchPage.css"

const SearchPage = () => {
    const fakeDataSearch = [{ search: "test" }];
    const fakeDataResults = [{ title: "result1" }, { title: "result2" }];
    return (
        <div className="search-page-container">
            <div className="search-page-title">
                <p>{`Kết quả tìm kiếm cho: ${fakeDataSearch[0].search}`}</p>
            </div>
            <div className="search-page-results">
                <div className="search-page-result-item">
                  <a href="#" className="search-page-result-link">
                    {fakeDataResults[0].title}
                  </a>
                  <a href="#" className="search-page-result-link">
                    {fakeDataResults[1].title}
                  </a>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
