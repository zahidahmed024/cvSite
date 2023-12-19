import React from 'react'
import { Card, Divider } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import TextInputWithLabel from './TextInputWithLabel';
import { projects } from '../constants/dummy';

export default function Project({ targetRef }) {
    return (
        <Card
            title="Projects"
            style={{ width: '100%', }}
            // actions={[
            //     <SettingOutlined key="setting" />,
            //     <EditOutlined key="edit" />,
            //     // <EllipsisOutlined key="ellipsis" />,
            // ]}
            headStyle={{ backgroundColor: '#f8f8f8' }}
            extra={<EditOutlined onClick={() => { }} />}
            ref={targetRef}
        >
            {
                projects.map((project, index) => {
                    return (
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                                backgroundColor: '#f8f8f8',
                                padding: 10,
                                borderRadius: 5,
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '49%',
                                }}>
                                    <TextInputWithLabel
                                        value='Rapidtransfer International'
                                        titleStyle={{ fontSize: 14 }}
                                        label="Project Name"
                                        isEdit={false}
                                    />
                                    <TextInputWithLabel
                                        value={"React, Node.js, Express.js, MongoDB, Firebase, Material UI, Ant Design"}
                                        label={'Technology Used'}
                                        titleStyle={{ fontSize: 14 }}
                                        isEdit={false}
                                    />
                                    <TextInputWithLabel
                                        value={"building pixel perfect smooth UI for both Android & Ios ."}
                                        titleStyle={{ fontSize: 14 }}
                                        label="Responsibility"
                                        isEdit={false}
                                        textArea={true}
                                    />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '49%',
                                }}>
                                    <TextInputWithLabel
                                        titleStyle={{ fontSize: 14 }}
                                        label="Project Link"
                                        isEdit={false}
                                        value={"https://play.google.com/store/apps/details?id=com.paytop.rapidtransfer"}
                                    />
                                    <TextInputWithLabel
                                        titleStyle={{ fontSize: 14 }}
                                        label="Duration"
                                        isEdit={false}
                                        value={"June 2020 - December 2020"}
                                    />
                                    <TextInputWithLabel
                                        titleStyle={{ fontSize: 14 }}
                                        label="Short Description"
                                        isEdit={false}
                                        textArea={true}
                                        value={'A money transfer mobile application that allows users to send money from 14 European countries to 33 African countries .'}
                                    />
                                </div>
                            </div>
                            <Divider />
                        </>
                    )
                })
            }
        </Card>
    )
}
