import React from 'react';
import { Layout, Input, Space, Badge, Menu, Dropdown } from 'antd';
import {
    BellFilled,
    DownOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
} from '@ant-design/icons';

import './styles.css';

const { Header } = Layout;

export default function ComponentCmWrapperHeaderComponent() {
    const username = 'Admin';

    return (
        <div
            className="cm-wrapper-header d-flex flex-row justify-content-between align-items-center"
            style={{ height: 48 }}
        >
            <Space size={16}>
                <MenuUnfoldOutlined />
                <div className="title">Case Management</div>
            </Space>
            <Input
                prefix={<SearchOutlined />}
                placeholder="Type search parameter (Case Id, Case Category, BAN etc.)"
                className="search-input"
            />
            <Space size={36}>
                <Badge count={5} className="notifications-badge">
                    <BellFilled />
                </Badge>
                <Dropdown
                    menu={
                        <Menu>
                            <Menu.Item>Settings</Menu.Item>
                        </Menu>
                    }
                    className="account-settings"
                >
                    <div>
                        {username} <DownOutlined />
                    </div>
                </Dropdown>
            </Space>
        </div>
    );
}
