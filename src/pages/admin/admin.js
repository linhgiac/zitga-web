import React from "react";
import "antd/dist/antd.css";
import "./admin.css";
import { SidebarData } from "./adminSidebarData";
import AdminPage from "./adminPage";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import AdminUser from "./adminPages/user/adminUser";
import AdminCareer from "./adminPages/career/adminCareer";
import AdminNews from "./adminPages/news/adminNews";

const { Header, Content, Footer, Sider } = Layout;

const Admin = ({ app }) => {
    console.log(window.location);
    return (
        <div className="admin-page">
            <Layout className=" admin-layout">
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo">
                        <a href="/">
                            <img
                                itemProp="image"
                                className="edgtf-normal-logo"
                                src="http://zitga.com.vn/wp-content/uploads/2019/11/rsz_logo-zitga-chuan-022-mobile.png"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["3"]}
                    >
                        <Menu.Item key="user" className="admin-menu-item">
                            <a href="/admin">User</a>
                        </Menu.Item>
                        <Menu.Item disabled={false} key="Careers" className="admin-menu-item">
                            <a href="/admin/career">Careers</a>
                        </Menu.Item>
                        <Menu.Item disabled={false} key="News" className="admin-menu-item">
                            <a href="/admin/news">News</a>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    {/* <AdminUser /> */}

                    {window.location.pathname === "/admin" && <AdminUser />}
                    {window.location.pathname === "/admin/career" && (
                        <AdminCareer />
                    )}
                    {window.location.pathname === "/admin/news" && (
                        <AdminNews />
                    )}
                </Layout>
            </Layout>
        </div>
    );
};

export default Admin;
