import React, { useState } from 'react';
import { Card, Avatar, Divider, Flex, Input, Typography, Select, } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import TextInputWithLabel from './TextInputWithLabel';
import SelectInputWithLabel from './SelectInputWithLabel';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography
const { TextArea } = Input;

const MainContent = ({ targetRef }) => {

    const [isEdit, setIsEdit] = useState(false)

    let data = {
        name: 'Md. Shohel Rana',
        designation: 'Software Engineer',
        sbu: 'SBU-1',
        enthusiast_at: 'java, c++ , python',
        biography: `Biography: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos quidem, est odit totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure, nisi perferendis ullam in recusandae ducimus
        dicta quam veritatis, eligendi consectetur cupiditate voluptas magni mollitia quisquam delectus repudiandae libero inventore! eaque sint qui quia, quos labore blanditiis dolore fugit error. Aliquam unde doloribus labore
        nisi itaque eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil placeat assumenda quod ex
        esse amet recusandae perferendis reiciendis corrupti modi eveniet excepturi tenetur porro odit officiis, beatae eum ipsa?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolores aliquid ratione necessitatibus, animi error hic, culpa deleniti harum est ea soluta, vel praesentium natus ab ullam optio accusamus ut.
        lore`
    }

    const ActionButtons = () => {
        if (!isEdit) {
            return (
                <EditOutlined
                    onClick={() => setIsEdit(!isEdit)}
                />
            )
        }
        return (
            <>
                <CloseCircleOutlined
                    style={{ marginRight: 10 }}
                    onClick={() => {
                        setIsEdit(!isEdit)
                    }}
                />
                <CheckCircleOutlined
                    twoToneColor={'red'}
                    onClick={() => {
                        setIsEdit(!isEdit)
                    }}
                />
            </>

        )

    }

    return (
        <>
            <Card
                title="Basic Info"
                style={{ width: '100%', color: 'red' }}
                // actions={[
                //     <SettingOutlined key="setting" />,
                //     <EditOutlined key="edit" />,
                //     // <EllipsisOutlined key="ellipsis" />,
                // ]}
                headStyle={{ backgroundColor: '#f8f8f8' }}
                extra={<ActionButtons />}
                ref={targetRef}
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
                            src="https://i.pinimg.com/1200x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" // replace with user's image
                            style={{ height: "100%", width: "80%", }}
                        />
                    </div>

                    <div style={{ padding: 10, width: "70%", }}>
                        <TextInputWithLabel
                            label="Name"
                            placeholder="type"
                            value={data.name}
                            onChangeText={(e) => console.log(e.target.value)}
                            isEdit={isEdit}
                        />
                        <SelectInputWithLabel
                            label="Designation"
                            isEdit={isEdit}
                            value={data.designation}
                        />
                        <SelectInputWithLabel
                            label="SBU/Project"
                            isEdit={isEdit}
                            value={data.sbu}
                        />
                        <TextInputWithLabel
                            label="Enthusiast at"
                            value={data.enthusiast_at}
                            placeholder="type"
                            onChangeText={(e) => console.log(e.target.value)}
                            isEdit={isEdit}
                        />

                    </div>

                </Flex>
                <TextInputWithLabel
                    label='Biography'
                    textArea={true}
                    value={data.biography}
                    isEdit={isEdit}
                />
            </Card>
            <Divider />
        </>
    );
};

// const TextInputWithLabel = ({ label = "", value = "", placeholder = 'type', textArea = false, onChangeText = undefined, isEdit = false }) => {
//     return (
//         <div style={{
//             marginBottom: 10
//         }}>
//             <Title level={5} style={{
//                 marginTop: 3,
//                 marginBottom: 3
//             }} >{label}</Title>
//             {
//                 !isEdit ? <Text>{value || 'Not provided'} </Text> : textArea ? <TextArea
//                     placeholder="textarea with clear icon"
//                     allowClear
//                     onChange={() => { }}
//                     rows={6}
//                     value={value}
//                 /> : <Input
//                     placeholder={placeholder}
//                     onChange={onChangeText}
//                     value={value}
//                 />
//             }
//         </div>
//     )
// }
// const SelectInputWithLabel = ({ label = "", value = "", placeholder = 'type', textArea = false, onChangeText = undefined, isEdit = false }) => {
//     return (
//         <div style={{
//             marginBottom: 10
//         }}>
//             <Title level={5} style={{
//                 marginTop: 3,
//                 marginBottom: 3
//             }} >{label}</Title>
//             {!isEdit ? <Text>{value || 'Not provided'} </Text>
//                 :
//                 <Select
//                     defaultValue={value}
//                     // mode="tags"
//                     style={{
//                         width: '100%',
//                     }}
//                     onChange={() => { }}
//                     tokenSeparators={[',']}
//                     options={[{}, {}]}
//                 />
//             }
//         </div>
//     )
// }

export default MainContent;