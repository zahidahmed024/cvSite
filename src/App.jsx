import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined, BookOutlined, TrophyOutlined, RocketOutlined, BulbOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Divider } from 'antd';
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
              label: 'Biography',
            },
            {
              key: '2',
              icon: <BulbOutlined />,
              label: 'Technical Skill',
            },
            {
              key: '3',
              icon: <RocketOutlined />,
              label: 'Experience',
            },
            {
              key: '4',
              icon: <BookOutlined />,
              label: 'Education',
            },
            {
              key: '5',
              icon: <VideoCameraOutlined />,
              label: 'Training',
            },
            {
              key: '6',
              icon: <TrophyOutlined />,
              label: 'Achievement',
            },
            {
              key: '7',
              icon: <UploadOutlined />,
              label: 'Experience',
            },
          ]}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'fixed',
            width: '100%',
            zIndex: 1
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            marginTop: 74
          }}
        >
          Content
          {/* Your content here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;