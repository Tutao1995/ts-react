import React, { FC } from "react";
import { Form, Input, Button } from "antd";
import { Store } from "antd/lib/form/interface";
import "./style.less";
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { span: 24 },
};

const Login: FC = () => {
    const onFinish = (values: Store) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (values: Store) => {
        console.log("Failed:");
    };

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="page-content-left">
                    <img src={require('../../images/login.png')} alt=""/>
                </div>
                <div className="page-content-right">
                    <div className="page-content-right-header">网阔数据分析平台</div>
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入用户名",
                                },
                            ]}
                            className="form-item-username"
                        >
                            <Input placeholder="请输入用户名" />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入密码",
                                },
                            ]}
                            className="form-item-password"
                        >
                            <Input.Password placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item {...tailLayout} className="form-item-submit">
                            <Button type="primary" htmlType="submit">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
