import Page from "./pages/pages";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
    const adminUser = {
        email: "admin@gmail.com",
        password: "123456",
    };

    const [user, setUser] = useState({ name: "", email: "" });

    const login = (details) => {
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
                {/* {window.location.pathname !== "/login" &&
                    window.location.pathname !== "/signup" && <Header app={app} />} */}

                <Page app={app} />
                {/* `{window.location.pathname !== "/login" &&
                    win`dow.location.pathname !== "/signup" && <Footer />} */}
            </BrowserRouter>
        </>
    );
}

export default App;
