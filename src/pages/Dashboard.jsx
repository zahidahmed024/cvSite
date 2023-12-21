import React, { useRef, useState } from 'react';
import { MenuUnfoldOutlined, DownloadOutlined, PoweroffOutlined, MenuFoldOutlined, StarOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined, BookOutlined, TrophyOutlined, RocketOutlined, BulbOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Typography, theme, Divider, Dropdown, Flex, Affix } from 'antd';
import { BasicInfo, Education, Project } from '../components';
import TrainingAndAchievement from '../components/TrainingAndAchievement';
import TechnicalSkills from '../components/TechnicalSkills';
import Experience from '../components/Experience';
const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const basicInfoRef = useRef(null);
    const educationRef = useRef(null);
    const trainingAdnAchievementRef = useRef(null);
    const technicalSkillsRef = useRef(null);
    const experienceRef = useRef(null);
    const projectRef = useRef(null);

    const items = [
        {
            key: '1',
            label: (
                <Text>Format 2:3 </Text>
            ),
        },
        {
            key: '2',
            label: (
                <Text>Format 3:2 </Text>
            ),
        },
        {
            key: '3',
            label: (
                <Text>
                    Custom Format
                </Text >
            ),
        },
    ];

    const onClick = ({ key }) => {
        // console.log('item dropdown', key)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme="dark" trigger={null} collapsible collapsed={collapsed} style={{ position: 'fixed', height: '100vh', zIndex: 1 }}>
                <div style={{
                    height: "32px",
                    margin: "16px",
                    // background: 'red'
                }}>
                    <img style={{ width: "100%" }} src="https://brainstation-23.com/wp-content/uploads/2019/02/BS-Logo-Blue_Hr.svg" />
                </div>

                <Divider style={{ margin: 0, backgroundColor: '#2d445f' }} />

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Basic Info',
                            onClick: () => { basicInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                        },
                        {
                            key: '2',
                            icon: <BulbOutlined />,
                            label: 'Technical Skill',
                            onClick: () => { technicalSkillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                        },
                        {
                            key: '3',
                            icon: <RocketOutlined />,
                            label: 'Experience',
                            onClick: () => { experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                        },
                        {
                            key: '4',
                            icon: <BookOutlined />,
                            label: 'Education',
                            onClick: () => { educationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                        },
                        {
                            key: '5',
                            icon: <VideoCameraOutlined />,
                            label: 'Training',
                            onClick: () => { trainingAdnAchievementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                        },
                        {
                            key: '6',
                            icon: <TrophyOutlined />,
                            label: 'Achievement',
                            onClick: () => { trainingAdnAchievementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                        },
                        {
                            key: '7',
                            icon: <UploadOutlined />,
                            label: 'Experience',
                            onClick: () => { experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                        },
                        {
                            key: '8',
                            icon: <StarOutlined />,
                            label: 'Project',
                            onClick: () => { projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
                        },
                    ]}
                />
            </Sider>
            <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
                <Affix offsetTop={0}>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Flex justify='space-around' style={{ width: 200 }}>
                            <Dropdown menu={{ items, onClick }} style={{ marginRight: 20, }}>
                                <Button type="primary" shape="round" icon={<DownloadOutlined />} >
                                    Download
                                </Button>
                            </Dropdown>
                            <Button type="text" icon={<PoweroffOutlined style={{
                                color: 'red',
                                fontSize: 18,
                                marginRight: 10
                                // alignSelf: 'center',
                                // paddingLeft: 20
                            }} />} />
                        </Flex>

                    </Header>
                </Affix>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        marginTop: 14,
                        minWidth: 600
                    }}
                >
                    <BasicInfo targetRef={basicInfoRef} />
                    <Education targetRef={educationRef} />
                    <TrainingAndAchievement targetRef={trainingAdnAchievementRef} />
                    <TechnicalSkills targetRef={technicalSkillsRef} />
                    <Experience targetRef={experienceRef} />
                    <Project targetRef={projectRef} />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;