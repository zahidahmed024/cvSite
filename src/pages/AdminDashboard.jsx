import React, { useState } from 'react';
import { Layout, Input, Table, Button, Space, Checkbox, Flex, theme, Typography, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined, EyeOutlined, DownloadOutlined, DownOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Text } = Typography;

const items = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Logout
            </a>
        ),
        key: '0',
    },
];


const dataSource = [
    {
        key: '1',
        employeeId: '001',
        name: 'John Doe',
        designation: 'Software Engineer',
        enthusiastAt: 'React,typscript,node,php',
        updateStatus: 'In Progress',
    },
    {
        key: '2',
        employeeId: '001',
        name: 'John Doe',
        designation: 'Software Engineer',
        enthusiastAt: 'React,typscript,node,php',
        updateStatus: 'In Progress',
    },
    {
        key: '3',
        employeeId: '001',
        name: 'John Doe',
        designation: 'Software Engineer',
        enthusiastAt: 'React,typscript,node,php',
        updateStatus: 'In Progress',
    },
    {
        key: '4',
        employeeId: '001',
        name: 'John Doe',
        designation: 'Software Engineer',
        enthusiastAt: 'React,typscript,node,php',
        updateStatus: 'In Progress',
    },
    {
        key: '5',
        employeeId: '001',
        name: 'John Doe',
        designation: 'Software Engineer',
        enthusiastAt: 'React,typscript,node,php',
        updateStatus: 'In Progress',
    },
    // Add more data here...
];

const columns = [
    // {
    //     title: 'Select',
    //     dataIndex: 'select',
    //     key: 'select',
    //     render: () => <Checkbox />,
    // },
    {
        title: 'Employee ID',
        dataIndex: 'employeeId',
        key: 'employeeId',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
    },
    {
        title: 'Enthusiast at',
        dataIndex: 'enthusiastAt',
        key: 'enthusiastAt',
    },
    {
        title: 'Update Status',
        dataIndex: 'updateStatus',
        key: 'updateStatus',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: () => (
            <Space>
                <Button type="link" icon={<EyeOutlined />} />
                <Button type="link" icon={<DownloadOutlined />} />
            </Space>
        ),
    },
];

export default function AdminDashboard() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <Layout>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                    // display: 'flex',
                    // justifyContent: 'space-between',
                    // alignItems: 'center',
                    // boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
                }}
            >
                <div style={{ float: 'right', paddingRight: 20 }}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <Button type='text' onClick={(e) => e.preventDefault()}>
                            <Space>
                                <Text strong>CV Admin</Text>
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </Header>
            <Content style={{ padding: '20px' }}>
                <Flex justify='space-between' gap={5} >
                    <Input.Search placeholder="Search in table" style={{ marginRight: '20px', width: '30%' }} />
                    <Flex justify='space-evenly' gap={3} >
                        <Button type="primary">Download CV Data</Button>
                        <Button type="primary">Email Notification</Button>
                    </Flex>
                </Flex>
                <Table
                    style={{
                        marginTop: '20px',
                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                    }}
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    columns={columns}
                />
            </Content>
        </Layout>
    );
}
