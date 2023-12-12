import React from 'react';
import { Card, Avatar, Divider, Flex } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const MainContent = () => {
    return (
        <>
            <Card
                title="Basic Info"
                style={{ width: '100%' }}
                // actions={[
                //     <SettingOutlined key="setting" />,
                //     <EditOutlined key="edit" />,
                //     // <EllipsisOutlined key="ellipsis" />,
                // ]}
                extra={<EditOutlined />}
            >
                {/* <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} // replace with user's avatar
                        title="User Name" // replace with user's name
                        description="User Designation" // replace with user's designation
                        style={{ height: 100}}
                    /> */}
                <Flex align='center'>
                    <div style={{
                        width: "30%",
                        height: 250,
                        // background: 'red',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f8f8f8',
                        padding: 10

                    }}>
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" // replace with user's image
                            style={{ height: "100%", width: "80%", }}
                        />
                    </div>

                    <div style={{ padding: 10, width: "70%", }}>
                        <p>Project: Project Name</p>
                        <p>Enthusiast at: Enthusiast Field</p>
                        <p>Biography: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos quidem, est odit totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure, nisi perferendis ullam in recusandae ducimus
                            dicta quam veritatis, eligendi consectetur cupiditate voluptas magni mollitia quisquam delectus repudiandae libero inventore! eaque sint qui quia, quos labore blanditiis dolore fugit error. Aliquam unde doloribus labore
                            nisi itaque eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil placeat assumenda quod ex
                            esse amet recusandae perferendis reiciendis corrupti modi eveniet excepturi tenetur porro odit officiis, beatae eum ipsa?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores aliquid ratione necessitatibus, animi error hic, culpa deleniti harum est ea soluta, vel praesentium natus ab ullam optio accusamus ut.
                            lore
                        </p>
                    </div>
                </Flex>


            </Card>
            <Divider />
        </>
    );
};

export default MainContent;