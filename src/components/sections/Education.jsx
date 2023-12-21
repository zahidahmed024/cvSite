import React, { useState, useRef } from 'react'
import { Table, Space, Button, Card, Divider, Modal } from 'antd';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import CustomTable from '../CustomTable';
import TextInputWithLabel from '../TextInputWithLabel';
import SelectInputWithLabel from '../SelectInputWithLabel';
import SortableList from '../SortableList';
const items = [
    "Gold",
    "Crimson",
    "Hotpink",
    "Blueviolet",
    "Cornflowerblue",
    "Skyblue",
    "Lightblue",
    "Aquamarine",
    "Burlywood"
]

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

const EducationList = ({ targetRef }) => {

    const [editId, setEditId] = useState(null)
    const [modify, setModify] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false)

    const handleOk = () => { setIsModalOpen(false) }
    const handleCancel = () => { setIsModalOpen(false) }
    
    const sortedRef = useRef(null)

    const onPressPriorityOk = () => {
        let sortedData = sortedRef.current.getUpdatedSortedData()
        console.log('sortedData', sortedData)

        setIsPriorityModalOpen(false)
    }
    const onPressPriorityCancel = () => { setIsPriorityModalOpen(false) }


    return <>
        <Card
            title="Education"
            style={{ width: '100%', }}
            // actions={[
            //     <SettingOutlined key="setting" />,
            //     <EditOutlined key="edit" />,
            //     // <EllipsisOutlined key="ellipsis" />,
            // ]}
            headStyle={{ backgroundColor: '#f8f8f8' }}
            extra={<EditOutlined onClick={() => setModify(state => !state)} />}
            ref={targetRef}
        >

            <CustomTable
                showActionButtons={modify}
                headers={headers}
                data={data}
                onClickAdd={() => { setIsModalOpen(true) }}
                onClickPriority={() => { setIsPriorityModalOpen(true) }}
                onClickEdit={(data) => { console.log(data) }}
                onClickDelete={() => { }}
            />
        </Card>

        <Modal title="Add education degree" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <TextInputWithLabel
                label='Degree'
                isEdit={true}
            />
            <SelectInputWithLabel
                label="Department"
                isEdit={true}
                value={'Computer Science'}
            />
            <SelectInputWithLabel
                label="Passing Year"
                isEdit={true}
                value={'1219'}
            />
            <SelectInputWithLabel
                label="University/ Institute"
                isEdit={true}
                value={'AIUB'}
            />
        </Modal>

        <Modal title="Change the priority of the list" open={isPriorityModalOpen} onOk={onPressPriorityOk} onCancel={onPressPriorityCancel}>
            <Paragraph>Drag and drop the list to change the priority</Paragraph>
            <SortableList
                ref={sortedRef}
            // items={items}
            />
        </Modal>
        <Divider />
    </>
};

export default EducationList;