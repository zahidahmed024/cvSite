import React from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import CustomTable from './CustomTable';

const data = [
    {
        id: 1,
        degree: 'Received training on “Web App Development – PHP ” from August 2016 to November 2016 from BASIS Institute of Technology & Management (BITM)',
    },
];

const headers = [
    {
        id: 1,
        title: 'Training',
    },

];
export default function Training() {
    return (
        <Card
            title="Training"
            style={{ width: '49%', }}
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
    )
}
