import React, { useState, useEffect } from "react";
import "./adminNews.css";
import { Button, Modal, Table, Form, Input, Select, DatePicker, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";

const AdminNews = () => {
    const [isDataChanged, setIsDataChanged] = useState();

    const handleData = (hasChange) => {
        setIsDataChanged(hasChange);
    };

    useEffect(() => {
        setIsDataChanged(true);
    }, []);

    return (
        <div className="admin-news-container">
            <div className="admin-news-btn">
                <AdminAddNewsModal handleData={handleData} />
            </div>
            <div className="admin-news-table">
                <AdminNewsTable
                    isDataChanged={isDataChanged}
                    handleData={handleData}
                />
            </div>
        </div>
    );
};
const AdminAddNewsModal = ({ handleData }) => {
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
                <AdminAddNewsForm form={form} handleData={handleData} />
            </Modal>
        </div>
    );
};

const AdminAddNewsForm = ({ form, handleData }) => {
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
        handleData(true);
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
                    <MyEditor form={form} initValue="" />
                </Form.Item>
            </Form>
        </div>
    );
};

const MyEditor = ({ form, initValue }) => {
    const [value, setValue] = useState(initValue);

    useEffect(() => {
        form.setFieldsValue({
            content: initValue
        });
    }, []);

    const onChange = (value) => {
        setValue(value);
        form.setFieldsValue({
            content: value
        })
    }

    return <ReactQuill theme="snow" value={value} onChange={onChange} />;
};

const AdminNewsTable = ({ isDataChanged, handleData }) => {
    const [data, setData] = useState();

    const getData = async () => {
        const response = await axios.get(
            'http://localhost/mvc/index.php?controller=news',
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            }).then((value) => value.data);

        console.log("Response data: ", response);
        console.log("Updated");
        setData(response.map((item) => { return { ...item, key: item.id } }));
        handleData(false);
    }

    const handleDelete = async (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);

        let values = { id: id };
        console.log('Success:', values);
        const dataSend = JSON.stringify(values);
        console.log(dataSend);

        const response = await axios.post(
            'http://localhost/mvc/index.php?controller=news&action=delete',
            dataSend
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        console.log(response.data);

        console.log("Delete News Id:", id);
    }

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: text => <a>{text}</a>
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            responsive: ['lg']
        },
        {
            title: "Action",
            key: "action",
            render: (_, news) => (
                <Space size='middle'>
                    <AdminUpdateNewsModal
                        news={news}
                        id={news.id}
                        handleData={handleData}
                    />
                    <a onClick={() => handleDelete(news.id)}>Delete</a>
                </Space>
            ),
            width: '20%'
        },
    ];

    if (isDataChanged === true) {
        getData();
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

const AdminUpdateNewsModal = ({ news, id, handleData }) => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        console.log("Current news: ", news);
        form.setFieldsValue(news);
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
            <a onClick={showModal}>
                Update
            </a>
            <Modal
                centered
                title="Update news"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <AdminUpdateNewsForm form={form} id={id} handleData={handleData} />
            </Modal>
        </div>
    );
};

const AdminUpdateNewsForm = ({ form, id, handleData }) => {
    const onFinish = async (values) => {
        values = { ...values, id: id };
        console.log('Success:', values);
        const data = JSON.stringify(values);
        console.log(data);

        const response = await axios.post(
            'http://localhost/mvc/index.php?controller=news&action=update',
            data
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        console.log(response.data);
        handleData(true);
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
                    <MyEditor form={form} initValue={form.getFieldValue('content')} />
                </Form.Item>
            </Form>
        </div>
    );
};
export default AdminNews;
