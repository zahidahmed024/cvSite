import React, { useState } from 'react'
// import SortableList from './SortableList'
import { Table, Space, Button, Card } from 'antd';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import CustomTable from './CustomTable';
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


const data = [
    {
        id: 1,
        degree: 'B.Tech',
        department: 'Computer Science',
        passingYear: '2020',
        university_Institute: 'Green University of Bangladesh'
    },
    {
        id: 2,
        degree: 'M.Tech',
        department: 'Information Technology',
        passingYear: '2022',
        university_Institute: 'Green University of Bangladesh'
    },
];

const headers = [
    {
        id: 1,
        title: 'Degree',
        dataIndex: 'degree',
        key: 'degree',
    },
    {
        id: 2,
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
    },
    {
        id: 3,
        title: 'Passing Year',
        dataIndex: 'passingYear',
        key: 'passingYear',
    },
    {
        id: 4,
        title: 'University/ Institute',
        dataIndex: 'University/Institute',
        key: 'University_Institute',
    },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //         <Space size="middle">
    //             <Button type="primary">Edit</Button>
    //             <Button danger>Delete</Button>
    //         </Space>
    //     ),
    // },
];

const EducationList = () => {

    const [editId, setEditId] = useState(null)

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

        <CustomTable
            headers={headers}
            data={data}
            onClickAdd={() => { }}
            onClickEdit={(data) => { console.log(data) }}
            onClickDelete={() => { }}
            EditComponent={<Button type="primary" icon={<EditOutlined />} />}
        />
    </Card>
};

export default EducationList;