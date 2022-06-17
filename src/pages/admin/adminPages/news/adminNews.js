import React from "react";
import "./adminNews.css";
import { Button, Modal, Table, Form, Input, Select, DatePicker } from "antd";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
const AdminNews = () => {
    return (
        <div className="admin-news-container">
            <div className="admin-news-btn">
                <AdminAddNewsModal />
            </div>
            <div className="admin-news-table">
                <AdminNewsTable />
            </div>
        </div>
    );
};
const AdminAddNewsModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Add news
            </Button>
            <Modal
                centered
                title="Add news"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <AdminAddNewsForm />
            </Modal>
        </div>
    );
};

const AdminAddNewsForm = () => {
    return (
        <div>
            <Form size="large" labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
                <Form.Item label="Title">
                    <Input />
                </Form.Item>
                <Form.Item label="Image Source">
                    <Input />
                </Form.Item>
                <Form.Item label="Post-date">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Description">
                    <MyEditor />
                </Form.Item>
            </Form>
        </div>
    );
};
const MyEditor = () => {
    const [value, setValue] = useState("");

    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
const AdminNewsTable = () => {
    const columns = [
        { title: "ID", dataIndex: "id", key: "id", width: "10%" },
        { title: "Title", dataIndex: "title", key: "title", render: text => <a>{text}</a> },
        {
            title: "Date",
            dataIndex: "date",
            key: "date", responsive: ['lg']
        },

        { title: "Delete", key: "delete" },
    ];
    const current = new Date();
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const fakeData = [
        {
            id: 1,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2022/05/11-1.jpg",
            title: "[OUR BELOVED SUMMER] CHUYẾN ĐI DÀNH CHO NHỮNG TÂM HỒN RỰC CHÁY",
            date: `${
                month[current.getMonth()]
            } ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 2,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2021/12/636A4498.jpg",
            title: "TEAMBUILDING – KẾT NỐI NHỮNG CHIẾN BINH",
            date: `${
                month[current.getMonth()]
            } ${current.getDate()}, ${current.getFullYear()}`,
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={fakeData} />
        </div>
    );
};
export default AdminNews;
