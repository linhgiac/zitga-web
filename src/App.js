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

    const getUserFromToken = async (accessToken) => {
        if (accessToken === null) {
            return { name: "", email: "" };
        }
        else {
            const dataSend = JSON.stringify({ token: accessToken });
            const response = await axios.post(
                `http://localhost/mvc/index.php?controller=user&action=show`,
                dataSend
                , {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                });
            //console.log(response.data);
            setUser(response.data);
            return response.data;
        }
    }

    const [user, setUser] = useState({ name: "", email: "" });

    const login = async (details) => {

        console.log(details);

        if (
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

        // // End test

        if (
            // Authenticate User
            response.data !== "Null data"
        ) {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email,
            });

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
        if (
            details.email === "" ||
            details.username === "" ||
            details.password === "" ||
            details.repassword === "" ||
            details.name === ""
        ) {
            return "Vui lòng nhập đủ thông tin";
        }

        console.log(details);
        const data = JSON.stringify(details);

        const response = await axios.post(
            'http://localhost/mvc/index.php?controller=signup&action=check',
            data,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            });
        console.log(response.data);
        if (response.data.success === "true") {
            return true;
        } else {
            return response.data.error;
        }
    }

    const [app, setApp] = useState({
        user: user,
        login: login,
        logout: logout,
        signup: signup,
        isLogged: userAccessToken === null ? false : true,
    });

    useEffect(() => {
        if (userAccessToken !== null) {
            console.log("User Access Token: ", userAccessToken);
            const getUser = async () => {
                let response = await getUserFromToken(userAccessToken);
                setApp({ ...app, user: response[0], isLogged: true });
            }
            getUser();
        }
        else {
            setApp({ ...app, user: { name: '', email: '' }, isLogged: false });
        }
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
