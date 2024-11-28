import React, { useState } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Menu, Button, Tooltip, Flex } from 'antd';
import { useTheme } from '../../hooks/useTheme';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';


const TopNav = (props) => {
    const { theme, toggleTheme } = useTheme();
    const { toggleSidebar, sidebarCollapsed } = props

    return <nav className='nav-container'>
        <Menu className='topnav' mode="horizontal">
            <Flex justify="between" align='center' gap='middle'>
                <Tooltip title="Toggle Sidebar">
                    <Button
                        shape='circle'
                        onClick={toggleSidebar}
                    >
                        {sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                </Tooltip>
            </Flex>
            <Flex>
                <Tooltip title="Change Theme">
                    <Button shape='circle' icon={theme == "light" ? <SunOutlined /> : <MoonOutlined />} onClick={toggleTheme} >
                    </Button>
                </Tooltip>
            </Flex>
        </Menu>
    </nav>
};
export default TopNav;