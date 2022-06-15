import Page from "./pages/pages";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {
    const adminUser = {
        email: "admin@gmail.com",
        password: "123456",
    };

    const [user, setUser] = useState({ name: "", email: "" });

    const login = async (details) => {

        // // Test
        // const response = await axios.get('http://localhost/mvc/?controller=product');
        // console.log(response.data);
        // console.log("Updated");
        // // End test

        console.log(details);

        if (
            details.email === "" ||
            details.name === "" ||
            details.password === ""
        ) {
            return "Vui lòng nhập đủ thông tin";
        } else if (
            details.email === adminUser.email &&
            details.password === adminUser.password
        ) {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email,
            });
            return true;
        } else {
            console.log("Thông tin đăng nhập sai");
            return "Thông tin đăng nhập sai";
        }
    };

    const logout = () => {
        console.log("Logout");
        setUser({
            name: "",
            email: "",
        });
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
        <>
            <BrowserRouter>

                <Page app={app} />

            </BrowserRouter>
        </>
    );
}

export default App;
