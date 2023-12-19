import React from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Divider } from 'antd';
import CustomTable from './CustomTable';



const headers = [
    {
        id: 1,
        title: 'Skill',
    },
    {
        id: 2,
        title: 'Level (out of 10)',
    },
];

const data = [
    {
        id: 1,
        skill: 'HTML',
        level: 9,
    },
    {
        id: 2,
        skill: 'CSS',
        level: 9,
    },
    {
        id: 3,
        skill: 'JavaScript',
        level: 9,
    },
    {
        id: 4,
        skill: 'React',
        level: 9,
    },
    {
        id: 5,
        skill: 'Node.js',
        level: 9,
    },

];
export default function TechnicalSkills({ targetRef }) {
    return (
        <>
            <Card
                title="Technical Skill"
                style={{ width: '100%', }}
                // actions={[
                //     <SettingOutlined key="setting" />,
                //     <EditOutlined key="edit" />,
                //     // <EllipsisOutlined key="ellipsis" />,
                // ]}
                headStyle={{ backgroundColor: '#f8f8f8' }}
                extra={<EditOutlined />}
                ref={targetRef}
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
            <Divider />
        </>
    )
}
