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
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.submit();
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
                <AdminAddCareerForm form={form} />
            </Modal>
        </div>
    );
};

const AdminAddCareerForm = ({ form }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        const data = JSON.stringify(values);
        console.log(data);
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
                <Form.Item label="Categories" name='categories'>
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
                <Form.Item label="End-date" name='end-date'>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Description" name='description'>
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
            description: value
        })
    }

    return <ReactQuill theme="snow" value={value} onChange={onChange} />;
};

const AdminCareerTable = () => {
    const columns = [
        { title: "ID", dataIndex: "id", key: "id", width: "5%" },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: text => <a>{text}</a>,
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            responsive: ["lg"],
        },
        { title: "Categories", dataIndex: "type", responsive: ["md"] },
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
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "Senior Game UX Designer",
            type: "Khối Sáng tạo/Thiết kế",
            date: `${month[current.getMonth()]
                } ${current.getDate()}, ${current.getFullYear()}`,
        },
        {
            id: 2,
            imgSrc: "http://zitga.com.vn/wp-content/uploads/2020/05/website.jpg",
            title: "GAME OPERATION LEADER",
            type: "Khối Development",
            date: `${month[current.getMonth()]
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
