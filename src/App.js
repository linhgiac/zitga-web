import Page from "./pages/pages";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CookiesProvider, useCookies } from 'react-cookie';
import { useJwt } from "react-jwt";

// const accessTokenTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkhhaGEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.T54_qTMO8tT3Yb4vvoP-pIn1HLSPIVSLYVfyH-iQDtA";

function App() {
    const adminUser = {
        email: "admin@gmail.com",
        password: "123456",
    };

    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const getAccessToken = () => {
        const token = cookies.userAccessToken;
        if (token === undefined || token === null) {
            return null;
        }
        else {
            return token;
        }
    }

    const [userAccessToken, setUserAccessToken] = useState(getAccessToken());

    const { decodedToken, isExpired } = useJwt(userAccessToken);

    const getUserFromToken = async (accessToken) => {
        if (accessToken === null) {
            return { name: "", email: "" };
        }
        else {
            // Send request to Back-end to get UserInfo and return
            // const response = await axios.post('url', userAccessToken);
            // const data = response.data;
            const response = decodedToken;
            return { response };
            // return { name: "", email: "" };
        }
    }

    const [user, setUser] = useState(getUserFromToken(userAccessToken));

    const login = async (details) => {

        console.log(details);

        if (
            details.email === "" ||
            details.username === "" ||
            details.password === ""
        ) {
            return "Vui lòng nhập đủ thông tin";
        }

        // // Test
        const data = JSON.stringify(details);
        const response = await axios.post(
            'http://localhost/mvc/?controller=login&action=check',
            data,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            });
        console.log("Response Data", response.data);
        console.log("Updated");

        // // End test

        if (
            // Authenticate User
            response.data !== ""
        ) {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email,
            });
            // setCookie('userAccessToken', accessTokenTest, { path: '/' });
            // setUserAccessToken(accessTokenTest);

            setCookie('userAccessToken', response.data, { path: '/' });
            setUserAccessToken(response.data);
            return true;
        } else {
            console.log("Thông tin đăng nhập sai");
            return "Thông tin đăng nhập sai";
        }
    };

    const logout = () => {
        removeCookie('userAccessToken');
        setUserAccessToken(null);
        console.log("Logout");
        setUser({
            name: "",
            email: "",
        });
    };

    const signup = async (details) => {
        details = {
            username: 'minhtoan',
            password: '123',
            repassword: '123',
            name: 'minh toan',
            email: 'minhtoan@gmail.com'
        };
        const data = JSON.stringify(details);

        const response = await axios.post(
            'http://localhost/zitga-web/mvc/?controller=signup&action=check',
            data,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            });
        console.log(response.data);
        return true;
    }

    const app = {
        user: user,
        login: login,
        logout: logout,
        isLogged: userAccessToken === null ? false : true,
        signup: signup,
    }

    useEffect(() => {
        console.log("User Access Token: ", userAccessToken);
    }, [userAccessToken]);

    return (
        <CookiesProvider>
            <BrowserRouter>

                <Page app={app} />

            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
