import React, { useState, useEffect } from "react";
import "./adminCareer.css";
import { Button, Modal, Table, Form, Input, Select, DatePicker, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";

const AdminCareer = () => {
    const [isDataChanged, setIsDataChanged] = useState();

    const handleData = (hasChange) => {
        setIsDataChanged(hasChange);
    };

    useEffect(() => {
        setIsDataChanged(true);
    }, []);

    return (
        <div className="admin-career-container">
            <div className="admin-career-btn">
                <AdminAddCareerModal handleData={handleData} />
            </div>
            <div className="admin-career-table">
                <AdminCareerTable
                    isDataChanged={isDataChanged}
                    handleData={handleData}
                />
            </div>
        </div>
    );
};
const AdminAddCareerModal = ({ handleData }) => {
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
                <AdminAddCareerForm form={form} handleData={handleData} />
            </Modal>
        </div>
    );
};

const AdminAddCareerForm = ({ form, handleData }) => {
    const onFinish = async (values) => {
        console.log('Success:', values);
        const data = JSON.stringify(values);
        console.log(data);

        const response = await axios.post(
            'http://localhost/mvc/index.php?controller=recruitment&action=store',
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
                <Form.Item label="Categories" name='category'>
                    <Select>
                        <Select.Option value="Khối BackOffice">
                            Khối BackOffice
                        </Select.Option>
                        <Select.Option value="Khối Development">
                            Khối Development
                        </Select.Option>
                        <Select.Option value="Khối Maketing">
                            Khối Maketing
                        </Select.Option>
                        <Select.Option value="Khối Sáng tạo/Thiết kế">
                            Khối Sáng tạo/Thiết kế
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="End-date" name='end-date'>
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

const AdminCareerTable = ({ isDataChanged, handleData }) => {
    const [data, setData] = useState();

    const getData = async () => {
        const response = await axios.get(
            'http://localhost/mvc/index.php?controller=recruitment',
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
            'http://localhost/mvc/index.php?controller=recruitment&action=delete',
            dataSend
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
        console.log(response.data);

        console.log("Delete Career Id:", id);
    }
    const columns = [
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
        {
            title: "Categories",
            dataIndex: "category",
            responsive: ["md"]
        },
        {
            title: "Action",
            key: "action",
            render: (_, career) => (
                <Space size='middle'>
                    <AdminUpdateCareerModal
                        career={career}
                        id={career.id}
                        handleData={handleData}
                    />
                    <a onClick={() => handleDelete(career.id)}>Delete</a>
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


const AdminUpdateCareerModal = ({ career, id, handleData }) => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        console.log("Current career: ", career);
        form.setFieldsValue(career);
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
                title="Update career"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
            >
                <AdminUpdateCareerForm form={form} id={id} handleData={handleData} />
            </Modal>
        </div>
    );
};

const AdminUpdateCareerForm = ({ form, id, handleData }) => {
    const onFinish = async (values) => {
        values = { ...values, id: id };
        console.log('Success:', values);
        const data = JSON.stringify(values);
        console.log(data);

        const response = await axios.post(
            'http://localhost/mvc/index.php?controller=recruitment&action=update',
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
                <Form.Item label="Categories" name='category'>
                    <Select>
                        <Select.Option value="Khối BackOffice">
                            Khối BackOffice
                        </Select.Option>
                        <Select.Option value="Khối Development">
                            Khối Development
                        </Select.Option>
                        <Select.Option value="Khối Maketing">
                            Khối Maketing
                        </Select.Option>
                        <Select.Option value="Khối Sáng tạo/Thiết kế">
                            Khối Sáng tạo/Thiết kế
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="End-date" name='end-date'>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Content" name='content'>
                    <MyEditor form={form} initValue={form.getFieldValue('content')} />
                </Form.Item>
            </Form>
        </div>
    );
};
export default AdminCareer;
