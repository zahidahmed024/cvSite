import React from 'react';

import { Button } from 'antd';
import { EditOutlined, PlusOutlined, DeleteOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons';
import { green, blue } from '@ant-design/colors'


const CustomTable = ({ headers = [], data = [], showActionButtons = true, onClickAdd = undefined, onClickPriority = undefined, onClickEdit = undefined, onClickDelete = undefined }) => {

    const THead = ({ headers = [] }) => {
        return (
            <thead>
                <tr style={{
                    backgroundColor: '#f8f8f8',

                }}>
                    {headers?.map(({ title, dataIndex, key }) => (
                        <th style={{ padding: '8px', }} key={dataIndex}>{title}</th>
                    ))}
                    {
                        showActionButtons && (
                            <th style={{
                                // display: 'flex',
                                // justifyContent: 'space-around',
                                padding: '2px',
                                margin: '5px',
                                textAlign: 'center',
                                width: '200px',
                                // backgroundColor: '#f8f8f8',
                            }}>
                                <Button onClick={onClickAdd} style={{ color: green.primary }} icon={<PlusOutlined />}>
                                    Add
                                </Button>
                                <Button onClick={onClickPriority} style={{ color: blue.primary, marginLeft: 5 }} icon={<VerticalAlignMiddleOutlined />}>
                                    Priority
                                </Button>
                            </th>
                        )
                    }

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
                        {
                            showActionButtons && (
                                <td style={{
                                    // display: 'flex',
                                    // justifyContent: 'space-around',
                                    padding: '2px',
                                    textAlign: 'center',
                                    width: '100px',
                                }}>
                                    <Button type="primary" icon={<EditOutlined />} onClick={() => onClickEdit(row)} />
                                    <Button type="primary" style={{ marginLeft: 5 }} danger icon={<DeleteOutlined />} onClick={() => onClickDelete(row)} />
                                </td>
                            )
                        }
                    </tr>
                ))}
            </tbody>
        );
    }


    return (
        <table style={{ width: '100%' }}>
            <THead headers={headers} onClickAdd={onClickAdd} />
            <TBody data={data} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
        </table>
    );
}

export default CustomTable