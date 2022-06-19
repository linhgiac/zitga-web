import React, { useState, useEffect } from "react";
import "./searchPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const SearchPage = () => {
	const [search, setSearch] = useState('');

	const getInput = () => {
		const path = decodeURI(window.location.pathname);
		const pathSplit = path.split(':');
		const input = pathSplit[pathSplit.length - 1];
		console.log(input);
		setSearch(input);
	}

	useEffect(() => {
		getInput();
	}, []);

	return (
		<div className="search-page-container">
			<div className="search-page-title">
				<p>{`Kết quả tìm kiếm cho: ${search}`}</p>
			</div>
			<div className="search-page-results">
				<div className="search-page-result-item">
					<div className="search-page-result-page">
						<p>News</p>
						<SearchNews search={search} />
					</div>

					<div className="search-page-result-page">
						<p>Careers</p>
						<SearchCareers search={search} />
					</div>
				</div>
			</div>
		</div>
	);
};

const SearchNews = ({ search }) => {
	const [result, setResult] = useState([]);
	const getResult = async () => {
		console.log("Search news by keyword: ", search);
		const dataSend = JSON.stringify({ keyword: search });
		const response = await axios.post(
			`http://localhost/mvc/index.php?controller=news&action=search`,
			dataSend
			, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				}
			});
		console.log(response.data);
		setResult(response.data);
	}

	useEffect(() => {
		getResult();
	})

	const newsList = result.map((news, index) => (
		<NewsContainer key={news.id.toString()} news={news} />
	));

	return (
		<>
			{newsList}
		</>
	);
}

const NewsContainer = ({ news }) => {
	let { postId } = useParams();

	const handleClicked = () => {
		postId = "news-details-" + news.id;
	}

	return (
		<div className="search-page-result-link">
			<a
				onClick={handleClicked}
				href={`/news/news-details-${news.id}`}
			>
				{news.title}
			</a>
		</div>
	)
}



const SearchCareers = ({ search }) => {
	const [result, setResult] = useState([]);
	const getResult = async () => {
		console.log("Search careers by keyword: ", search);
		const dataSend = JSON.stringify({ keyword: search });
		const response = await axios.post(
			`http://localhost/mvc/index.php?controller=recruitment&action=search`,
			dataSend
			, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				}
			});
		console.log(response.data);
		setResult(response.data);
	}

	useEffect(() => {
		getResult();
	})

	const careersList = result.map((career, index) => (
		<CareerContainer key={career.id.toString()} career={career} />
	));

	return (
		<>
			{careersList}
		</>
	);
}

const CareerContainer = ({ career }) => {
	let { postId } = useParams();

	const handleClicked = () => {
		postId = "careers-details-" + career.id;
	}

	return (
		<div className="search-page-result-link">
			<a
				onClick={handleClicked}
				href={`/careers/careers-details-${career.id}`}
			>
				{career.title}
			</a>
		</div>
	)
}

export default SearchPage;
