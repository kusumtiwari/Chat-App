import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Account from '../../components/common/Account';
const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
    // Handle form submission
    const onFinish = (values: any) => {
        console.log('Form values: ', values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-4xl flex bg-white rounded-xl shadow-lg overflow-hidden">
                <Account/>

                {/*Login Form*/}
                <div className="w-full max-w-md p-8 flex items-center justify-center bg-gray-50">
                    <div className="w-full">
                        <Title level={2} className="text-center text-primary mb-6">Login</Title>

                        <Form onFinish={onFinish} layout="vertical">
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input placeholder="Enter your email" className="border-primary" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password placeholder="Enter your password" className="border-primary" />
                            </Form.Item>

                            <Form.Item className="flex justify-between">
                                <Button type="primary" htmlType="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
                                    Log In
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className="flex justify-center mt-4">
                            <Text className="text-gray-600">Don't have an account? </Text>
                            <Link to="/signup" className="text-secondary text-sm font-semibold ml-1">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
