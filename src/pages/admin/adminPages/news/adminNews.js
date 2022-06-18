import React from "react";
import "./adminNews.css";
import { Button, Modal, Table, Form, Input, Select, DatePicker } from "antd";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";

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
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        console.log("AAAAAAAAAAAAA");
        form.submit();
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
                <AdminAddNewsForm form={form} />
            </Modal>
        </div>
    );
};

const AdminAddNewsForm = ({ form }) => {
    const onFinish = async (values) => {
        console.log('Success:', values);
        const data = JSON.stringify(values);
        console.log(data);

        const response = await axios.post(
            'http://localhost/mvc/index.php?controller=news&action=store',
            data
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        console.log(response.data);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size="large" labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}
            >
                <Form.Item label="Title" name='title'>
                    <Input />
                </Form.Item>
                <Form.Item label="Image Source" name='image'>
                    <Input />
                </Form.Item>
                <Form.Item label="Post-date" name='post-date'>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Content" name='content'>
                    <MyEditor form={form} />
                </Form.Item>
            </Form>
        </div>
    );
};
const MyEditor = ({ form }) => {
    const [value, setValue] = useState("");

    const onChange = (value) => {
        setValue(value);
        form.setFieldsValue({
            content: value
        })
    }

    return <ReactQuill theme="snow" value={value} onChange={onChange} />;
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
            date: `${month[current.getMonth()]
                } ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 2,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2021/12/636A4498.jpg",
            title: "TEAMBUILDING – KẾT NỐI NHỮNG CHIẾN BINH",
            date: `${month[current.getMonth()]
                } ${current.getDate()}, ${current.getFullYear()}`,
        },
    ];

    return (
        <div>
            <Table
            
                columns={columns}
                dataSource={fakeData}
            />
        </div>
    );
};
export default AdminNews;
