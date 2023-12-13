import React from 'react'
// import SortableList from './SortableList'
import { Table, Space, Button, Card } from 'antd';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
// const items = [
//     "Gold",
//     "Crimson",
//     "Hotpink",
//     "Blueviolet",
//     "Cornflowerblue",
//     "Skyblue",
//     "Lightblue",
//     "Aquamarine",
//     "Burlywood"
// ]

// export default function Skills() {
//     return (
//         <SortableList
//             items={items}
//         />
//     )
// }


const dataSource = [
    {
        key: '1',
        degree: 'B.Tech',
        department: 'Computer Science',
        passingYear: '2020',
        university_Institute: 'Green University of Bangladesh'
    },
    {
        key: '2',
        degree: 'M.Tech',
        department: 'Information Technology',
        passingYear: '2022',
        university_Institute: 'Green University of Bangladesh'
    },
];

const columns = [
    {
        title: 'Degree',
        dataIndex: 'degree',
        key: 'degree',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Passing Year',
        dataIndex: 'passingYear',
        key: 'passingYear',
    },
    {
        title: 'University/ Institute',
        dataIndex: 'University/Institute',
        key: 'University_Institute',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary">Edit</Button>
                <Button danger>Delete</Button>
            </Space>
        ),
    },
];

const EducationList = () => {
    return <Card
        title="Education"
        style={{ width: '100%', }}
        // actions={[
        //     <SettingOutlined key="setting" />,
        //     <EditOutlined key="edit" />,
        //     // <EllipsisOutlined key="ellipsis" />,
        // ]}
        headStyle={{ backgroundColor: '#f8f8f8' }}
        extra={<EditOutlined />}
    >
        <table style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th style={{ padding: '8px', }}>Degree</th>
                    <th style={{ padding: '8px' }}>Department</th>
                    <th style={{ padding: '8px' }}>Passing Year</th>
                    <th style={{ padding: '8px' }}>University/Institute</th>
                    <th style={{ padding: '8px' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item, index) => (
                    <tr key={index} style={{
                        // backgroundColor: '#f8f8f8',
                        borderBottomWidth: 1,
                        borderBottomColor: 'red'
                    }}>
                        <td style={{ padding: '8px', textAlign: 'center' }}>{item.degree}</td>
                        <td style={{ padding: '8px', textAlign: 'center' }}>{item.department}</td>
                        <td style={{ padding: '8px', textAlign: 'center' }}>{item.passingYear}</td>
                        <td style={{ padding: '8px', textAlign: 'center' }}>{item.university_Institute}</td>
                        <td style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            padding: '8px',
                            textAlign: 'center'
                        }}>
                            <Button
                                icon={<EditOutlined />}
                            />
                            <Button
                                icon={<CloseCircleOutlined />}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </Card>
};

export default EducationList;