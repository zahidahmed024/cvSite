import { Button, Card, Flex, Layout } from 'antd'
import React from 'react'
import cvSVg from '../assets/cv.svg'
import TextInputWithLabel from '../components/TextInputWithLabel'

export default function Login() {

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#e1e8f2' }}>
            <Layout.Header style={{ padding: 0, background: '#ffffff' }}>
                <div style={{
                    height: "32px",
                    width: "200px",
                    margin: "10px",
                }}>
                    <img style={{ width: '100%', height: '100%' }} src="https://brainstation-23.com/wp-content/uploads/2019/02/BS-Logo-Blue_Hr.svg" />
                </div>
            </Layout.Header>
            <Flex justify='center' align='center' style={{ paddingTop: '5%' }}>
                <Card style={{
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                }}>
                    <Flex justify='space-around' wrap='wrap'>
                        <div style={{ width: '50%' }}>
                            <img src={cvSVg} style={{
                                height: '100%',
                                width: '100%',
                            }} />
                        </div>
                        <div style={{ width: '50%', padding: 40 }}>
                            <TextInputWithLabel label='User Name' isEdit={true} />
                            <TextInputWithLabel label='Password' isEdit={true} />
                            <Button type='primary' style={{ width: '100%' }}>Login</Button>
                        </div>
                    </Flex>
                </Card>
            </Flex>
        </Layout>
    )
}
