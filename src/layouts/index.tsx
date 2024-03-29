import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Link from 'umi/link';
import style from './index.css';

const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout className={style.layout}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="app1">
            <Link to="/app1">App1</Link>
          </Menu.Item>
          {/*<Menu.Item key="app2">*/}
          {/*  <Link to="/app2">App2</Link>*/}
          {/*</Menu.Item>*/}
        </Menu>
      </Header>
      <Content className={style.content}>
        <Breadcrumb className={style.breadcrumb}>
          <Breadcrumb.Item>App1</Breadcrumb.Item>
          <Breadcrumb.Item>User</Breadcrumb.Item>
        </Breadcrumb>
        <div id="root-slave">Content</div>
      </Content>
      <Footer className={style.footer}>Ant Design ©2019 Created by Ant UED</Footer>
    </Layout>
  );
};

export default BasicLayout;
