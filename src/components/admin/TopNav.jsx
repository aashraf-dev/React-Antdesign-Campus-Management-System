import React, { useState } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Menu, Button, Tooltip, Flex } from 'antd';
import { useTheme } from '../../hooks/useTheme';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';


const TopNav = (props) => {
    const { theme, toggleTheme } = useTheme();
    const { toggleSidebar, sidebarCollapsed, pageTitle } = props
    const location = useLocation()

    return <nav className='nav-container'>
        <Menu className='topnav' mode="horizontal">
            <Flex style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    <p>{pageTitle}</p>
                </Flex>
                <Flex>
                    <Tooltip title="Change Theme">
                        <Button shape='circle' icon={theme == "light" ? <SunOutlined /> : <MoonOutlined />} onClick={toggleTheme} >
                        </Button>
                    </Tooltip>
                </Flex>
            </Flex>
        </Menu>
    </nav>
};
export default TopNav;