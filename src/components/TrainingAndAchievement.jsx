import React from 'react'
import Training from './Training'
import Achievement from './Achievement'
import { Card, Divider } from 'antd'
import { EditOutlined } from '@ant-design/icons';

export default function TrainingAndAchievement({ targetRef }) {
    return (
        // <Card
        //     title="Education"
        //     style={{ width: '100%', }}
        //     // actions={[
        //     //     <SettingOutlined key="setting" />,
        //     //     <EditOutlined key="edit" />,
        //     //     // <EllipsisOutlined key="ellipsis" />,
        //     // ]}
        //     headStyle={{ backgroundColor: '#f8f8f8' }}
        //     extra={<EditOutlined />}
        // >
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
                ref={targetRef}
            >
                <Training />
                <Achievement />
            </div>
            <Divider />
        </>
        // </Card>
    )
}
