import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Account from '../../components/common/Account';

const { Title, Text } = Typography;

const SignupPage: React.FC = () => {
    // Handle form submission
    const onFinish = (values: any) => {
        console.log('Form values: ', values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-4xl flex bg-white rounded-xl shadow-lg overflow-hidden">
                <Account />

                {/* Signup Form */}
                <div className="w-full max-w-md p-8 flex items-center justify-center bg-gray-50">
                    <div className="w-full">
                        <Title level={2} className="text-center text-primary mb-6">Sign Up</Title>

                        <Form onFinish={onFinish} layout="vertical">
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input placeholder="Enter your email" className="border-primary" />
                            </Form.Item>

                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder="Enter your username" className="border-primary" />
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
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className="flex justify-center mt-4">
                            <Text className="text-gray-600">Already have an account? </Text>
                            <Link to="/login" className="text-secondary text-sm font-semibold ml-1">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
