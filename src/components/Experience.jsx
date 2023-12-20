import React from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Divider } from 'antd';
import CustomTable from './CustomTable';



const headers = [
    {
        id: 1,
        title: 'Designation',
    },
    {
        id: 2,
        title: 'Company',
    },
    {
        id: 3,
        title: 'From',
    },
    {
        id: 4,
        title: 'To',
    },
];

const data = [
    {
        id: 1,
        designation: 'Software Engineer',
        company: 'Brain Station 23 Ltd',
        from: '2020',
        to: '2021'
    },
    {
        id: 2,
        designation: 'Senior Software Engineer',
        company: 'Brain Station 23 Ltd',
        from: '2020',
        to: '2021'
    },

];
export default function Experience({ targetRef }) {
    return (
        <>
            <Card
                title="Experience"
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
