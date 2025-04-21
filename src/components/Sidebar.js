import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  TableOutlined,
  InfoCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProductOutlined
} from '@ant-design/icons';
import { MAX_VERTICAL_CONTENT_RADIUS } from 'antd/es/style/placementArrow';

const { Sider } = Layout;

function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={200}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: '#fff',
        borderRight: '1px solid #eee',
      }}
      trigger={null} 
    >
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-end',
          padding: '0 16px',
        }}
      >
        <div onClick={toggleCollapsed} style={{ cursor: 'pointer', fontSize: 18 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/data" icon={<TableOutlined />}>
          <Link to="/data">US Data Table</Link>
        </Menu.Item>
        <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="/products" icon={<ProductOutlined />}>
          <Link to="/products">Products</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
