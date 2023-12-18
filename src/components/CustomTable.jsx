import React from 'react';

import { Button } from 'antd';
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';



const CustomTable = ({ headers = [], data = [], onClickAdd = undefined, onClickEdit = undefined, onClickDelete = undefined }) => {
    return (
        <table style={{ width: '100%' }}>
            <THead headers={headers} onClickAdd={onClickAdd} />
            <TBody data={data} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
        </table>
    );
}
const THead = ({ headers = [], onClickAdd = undefined }) => {
    return (
        <thead>
            <tr>
                {headers?.map(({ title, dataIndex, key }) => (
                    <th style={{ padding: '8px', }} key={dataIndex}>{title}</th>
                ))}
                <th style={{ padding: '8px', }}>
                    <Button type="primary" icon={<PlusOutlined />} />
                </th>
            </tr>
        </thead>
    );
};

const TBody = ({ data = [], onClickEdit = undefined, onClickDelete = undefined }) => {
    return (
        <tbody>
            {data?.map((row, index) => (
                <tr key={index}>
                    {Object.keys(row)?.map((key) => {
                        if (key !== 'id')
                            return <td
                                style={{ padding: '8px', textAlign: 'center' }}
                                key={row[key]}>{row[key]}
                            </td>
                    }
                    )}
                    <td style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '8px',
                        textAlign: 'center'
                    }}>
                        <Button type="primary" icon={<EditOutlined />} onClick={() => onClickEdit(row)} />
                        <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => onClickDelete(row)} />
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default CustomTable