import React from "react";
import "./adminCareer.css";
import { Button, Modal, Table, Form, Input, Select, DatePicker } from "antd";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
const AdminCareer = () => {
    return (
        <div className="admin-career-container">
            <div className="admin-career-btn">
                <AdminAddCareerModal />
            </div>
            <div className="admin-career-table">
                <AdminCareerTable />
            </div>
        </div>
    );
};
const AdminAddCareerModal = () => {
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
                Add Career
            </Button>
            <Modal
                centered
                title="Add Career"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <AdminAddCareerForm />
            </Modal>
        </div>
    );
};

const AdminAddCareerForm = () => {
    return (
        <div>
            <Form size="large" labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
                <Form.Item label="Title">
                    <Input />
                </Form.Item>
                <Form.Item label="Categories">
                    <Select>
                        <Select.Option value="backoffice">
                            Khối BackOffice
                        </Select.Option>
                        <Select.Option value="development">
                            Khối Development
                        </Select.Option>
                        <Select.Option value="marketing">
                            Khối Maketing
                        </Select.Option>
                        <Select.Option value="designer">
                            Khối Sáng tạo/Thiết kế
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="End-date">
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
const AdminCareerTable = () => {
    const columns = [
        { title: "ID", dataIndex: "id", key: "id", width: "5%" },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: text => <a>{text}</a>,
            editable: true,
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            responsive: ["lg"],
        },
        { title: "Categories", dataIndex: "type", responsive: ["md"] },
        { title: "Delete", key: "delete", },
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
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Senior Game UX Designer",
            type: "Khối Sáng tạo/Thiết kế",
            date: `${
                month[current.getMonth()]
            } ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 2,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "GAME OPERATION LEADER",
            type: "Khối Development",
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
export default AdminCareer;
