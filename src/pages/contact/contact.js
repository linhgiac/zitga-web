import React, { useState } from "react";
import "./contact.css";
import PageStyles from "../pages.module.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import {
    FacebookFilled,
    LinkedinFilled,
    YoutubeFilled,
} from "@ant-design/icons";

import { ReactComponent as Separator } from "../../assets/contact-separator.svg";

const Contact = ({ app }) => {
    return (
        <div className={PageStyles.content}>
            <div>
                <ContactTitleImage />
            </div>
            <div className={PageStyles.content}>
                <ContactContent app={app} />
            </div>
        </div>
    );
};
const ContactTitleImage = () => {
    return (
        <div className={PageStyles.titleContent}>
            <div className={PageStyles.contentTitleImg} id="contact-img">
                <div className={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>Contact</div>
                </div>
            </div>
        </div>
    );
};

const ContactContent = ({ app }) => {
    const size = app.isLogged ? 24 : 12;
    return (
        <div className="contact-content-inner">
            <Row gutter={16}>
                <Col className="gutter-row" span={size}>
                    <div className="content-col1">
                        <div className="content-sub-title">
                            Liên hệ với <br />
                            Zitga Studios
                        </div>
                        <div className="content-separator">
                            <Separator />
                        </div>
                        <div className="content-text">
                            <p>
                                Trụ sở chính: P704 – 706, tòa nhà Toyota Thanh
                                Xuân, số 315 Trường Chinh, Thanh Xuân, Hà Nội.
                            </p>
                            <p>
                                Văn phòng TP Hồ Chí Minh: Tầng 3 Tòa nhà Blue
                                Diamond (BD), Y1 Hồng Lĩnh, Cư xá Bắc Hải,
                                phường 15, quận 10, TP. Hồ Chí Minh
                            </p>
                            <p>
                                Số điện thoại: 034 639 6067 Email: hr@zitga.com
                            </p>
                            <div className = 'contact-follow'>
                                <ul>
                                follow us on: 
                                
                                    <li>
                                        <FacebookFilled />
                                    </li>
                                    <li>
                                        <LinkedinFilled />
                                    </li>
                                    <li>
                                        <YoutubeFilled />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
                {(!app.isLogged) && (
                    <Col className="gutter-row" span={12}>
                        <div className="content-col2">
                            <div className="content-col2-submit-form">
                                <SubmitForm />
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
            <div></div>
        </div>
    );
};
const SubmitForm = ({ login }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = e => {
        e.preventDefault();

        let result = login(details);
        if (result === true) {
            navigate("/");
        } else {
            setError(login(details));
        }
    };

    const clearError = () => {
        setError("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="login-form">
                <div className="login-form-group">
                    {/* <label htmlFor='name'>Name: </label> */}
                    <input
                        className="login-form-input"
                        type="text"
                        name="name"
                        id="name"
                        onChange={e =>
                            setDetails({ ...details, name: e.target.value })
                        }
                        value={details.name}
                        placeholder="Name"
                    ></input>
                </div>
                <div className="login-form-group">
                    {/* <label htmlFor='email'>Email: </label> */}
                    <input
                        className="login-form-input"
                        type="text"
                        name="email"
                        id="email"
                        onChange={e =>
                            setDetails({ ...details, email: e.target.value })
                        }
                        value={details.email}
                        placeholder="Email"
                    ></input>
                </div>
                <div className="login-form-group">
                    {/* <label htmlFor='password'>Password: </label> */}
                    <input
                        className="login-form-input"
                        type="password"
                        name="password"
                        id="password"
                        onChange={e =>
                            setDetails({ ...details, password: e.target.value })
                        }
                        value={details.password}
                        placeholder="Password"
                    ></input>
                </div>
                <div className="login-form-group">
                    <input
                        className="login-form-button"
                        type="submit"
                        value="Login"
                    ></input>
                </div>
            </div>
        </form>
    );
};

export default Contact;
