import React, { useState } from "react";
import axios from "axios";
import "./adminUser.css";
import { Avatar, Image, Modal, Form, Input, Button } from "antd";

const url = "localhost/mvc/?controller=...";

const AdminUser = () => {
    const [file, setFile] = useState();
    const fakeData = [
        {
            id: 1,
            name: "Admin",
            username: "admin",
            mail: "admin@gmail.com",
            password: "password",
        },
    ];

    const uploadFile = async file => {
        const formData = new FormData();

        formData.append("avatar", file);

        return await axios.post(url, formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await uploadFile(file);
        console.log(response.data);
    };

    const handleChange = e => {
        setFile(e.target.files[0]);
    };
    const [formInfor] = Form.useForm();
    const [formPassword] = Form.useForm();
    const [isAvatarModalVisible, setIsAvatarModalVisible] = useState(false);
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
    const showAvatarModal = () => {
        setIsAvatarModalVisible(true);
    };
    const showPasswordModal = () => {
        setIsPasswordModalVisible(true);
    };

    const handleOk = () => {
      setIsAvatarModalVisible(false);
      setIsPasswordModalVisible(false);
    };

    const handleCancel = () => {
      setIsAvatarModalVisible(false);
      setIsPasswordModalVisible(false);
    };

    return (
        <div className="admin-user-container">
            <div className="admin-user-avatar">
                <Avatar
                    src={
                        <Image
                            src="https://joeschmoe.io/api/v1/random"
                            style={{
                                width: 32,
                            }}
                        />
                    }
                    className="admin-user-avatar-img"
                    size={100}
                />
                <div className="admin-user-name">
                    <div className="admin-username">{fakeData[0].username}</div>
                    <button
                        className="admin-user-avatar-btn"
                        onClick={showAvatarModal}
                    >
                        Đổi ảnh đại diện
                    </button>
                    <button
                        className="admin-user-avatar-btn"
                        onClick={showPasswordModal}
                    >
                        Đổi mật khẩu
                    </button>
                    <Modal
                        centered
                        title="Đổi ảnh đại diện"
                        visible={isAvatarModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width={900}
                    >
                        <form onSubmit={handleSubmit}>
                            <h1>Upload Image</h1>
                            <input
                                type="file"
                                onChange={handleChange}
                                accept=".jpg, .png"
                            />
                            <button type="submit">Upload File</button>
                        </form>
                    </Modal>
                    <Modal
                        centered
                        title="Đổi mật khẩu"
                        visible={isPasswordModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width={900}
                    >
                        <ChangePasswordForm form={formPassword} />
                    </Modal>
                </div>
            </div>
            <div className="admin-user-information">
                <AdminUserForm form={formInfor} />
            </div>
        </div>
    );
};
const ChangePasswordForm = ({ formPassword }) => {
    const onFinish = values => {
        console.log("Success:", values);
        const data = JSON.stringify(values);
        console.log(data);
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Form
                form={formPassword}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size="large"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
            >
                <Form.Item
                    label="Mật khẩu cũ"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu cũ",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu mới"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu mới!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Nhập lại mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập lại mật khẩu mới!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </div>
    );
};
const AdminUserForm = ({ formInfor }) => {
    const onFinish = values => {
        console.log("Success:", values);
        const data = JSON.stringify(values);
        console.log(data);
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };
    const handleClicked = () => {};

    return (
        <div>
            <Form
                form={formInfor}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size="large"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
                className="admin-user-form-wrapper"
            >
                <Form.Item
                    className="admin-user-form-item"
                    label="Name"
                    name="name"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="admin-user-form-item"
                    label="Username"
                    name="username"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className="admin-user-form-item"
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item className="admin-user-form-item">
                    <button
                        className="admin-user-form-btn"
                        type="submit"
                        onClick={handleClicked}
                    >
                        Xác nhận
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default AdminUser;
