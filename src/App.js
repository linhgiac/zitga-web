import Page from "./pages/pages";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CookiesProvider, useCookies } from 'react-cookie';
import { useJwt } from "react-jwt";

const userAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkhhaGEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.T54_qTMO8tT3Yb4vvoP-pIn1HLSPIVSLYVfyH-iQDtA";

function App() {
    const adminUser = {
        email: "admin@gmail.com",
        password: "123456",
    };

    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    // setCookie('userAccessToken', userAccessToken, { path: '/' });

    const setCookies = (userInfo) => {
        setCookie('name', userInfo.name, { path: '/' });
        setCookie('email', userInfo.email, { path: '/' });
    };

    const removeCookies = () => {
        removeCookie('name');
        removeCookie('email');
    };

    const resetCookies = () => {
        setCookie('name', "", { path: '/' });
        setCookie('email', "", { path: '/' });
    };

    const { decodedToken, isUserExpired } = useJwt(cookies.userAccessToken);

    if (isUserExpired) {
        resetCookies();
    } else {
        console.log(decodedToken);
        if (decodedToken !== null) {
            console.log("Already access token exist");
            setCookies(decodedToken);
        } else {
            resetCookies();
        }
    };

    const [user, setUser] = useState({
        name: (cookies.name === undefined ? "" : cookies.name),
        email: (cookies.email === undefined ? "" : cookies.email),
    });

    console.log(user);

    const login = async (details) => {

        details = {
          id: 1,
          title: "updated",
          content: "sfsdfsf",
          image: "sfsdfsdf"
        }
        // Test
        const response = await axios.post('http://localhost:8080/mvc/index.php?controller=news&action=show', details);
        console.log(response.data);
        console.log("Updated");
        // End test

        console.log(details);

        if (
            details.email === "" ||
            details.name === "" ||
            details.password === ""
        ) {
            return "Vui lòng nhập đủ thông tin";
        } else if (
            // Authenticate User
            details.email === adminUser.email &&
            details.password === adminUser.password
        ) {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email,
            });
            setCookies(details);
            return true;
        } else {
            console.log("Thông tin đăng nhập sai");
            return "Thông tin đăng nhập sai";
        }
    };

    const logout = () => {
        setCookie('userAccessToken', "", { path: '/' });
        console.log("Logout");
        setUser({
            name: "",
            email: "",
        });
        resetCookies();
    };

    const signup = (details) => {
        return true;
    }

    const app = {
        user: user,
        login: login,
        logout: logout,
        isLogged: (user.email === "" || user.name === "") ? false : true,
        signup: signup
    }

    return (
        <CookiesProvider>
            <BrowserRouter>

                <Page app={app} />

            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
