import React, { useState, useEffect } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: (<Link to="/">Dashboard</Link>),
    },
    {
        key: 'sub1',
        icon: <DesktopOutlined />,
        label: 'Students',
        children: [
            { key: '2', label: (<Link to="/students">View Students</Link>) },
            { key: '3', label: (<Link to="/students/add-students">Add Students</Link>) },
        ],
    },
    {
        key: 'sub2',
        icon: <ContainerOutlined />,
        label: 'Invoices',
        children: [
            { key: '4', label: (<Link to="/invoices">View Invoices</Link>) },
            { key: '5', label: (<Link to="/invoices/create-invoices">Create Invoices</Link>) },
            { key: '6', label: (<Link to="/invoices/invoices-statistics">Invoices Statistics</Link>) },
        ],
    },
    {
        key: 'sub3',
        label: 'Staff Management',
        children: [
            { key: '7', label: (<Link to="/staff/teaching-staff">Teaching Staff</Link>) },
            { key: '8', label: (<Link to="/staff/other-staff">Non-Teaching Staff</Link>) },
        ],
    },
    {
        key: 'sub4',
        label: 'Results',
        icon: <MailOutlined />,
        children: [
            { key: '9', label: (<Link to="/results">Prev Results</Link>) },
            { key: '10', label: (<Link to="/add-results">Create New Record</Link>) },
        ],
    },
    {
        key: 'sub5',
        label: 'Attendance',
        icon: <AppstoreOutlined />,
        children: [
            { key: '11', label: (<Link to="/attendance">Attendance Reports</Link>) },
            { key: '12', label: (<Link to="/edit-attendance">Edit Attendance</Link>) },
        ],
    },
];

const Sidebar = ({ sidebarCollapsed }) => {
    const location = useLocation();
    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);

    // Function to find the selected key based on the current path
    const findSelectedKey = (path) => {
        for (const item of items) {
            if (item.children) {
                const matchingChild = item.children.find(child => child.label.props.to === path);
                if (matchingChild) {
                    return matchingChild.key;
                }
            } else if (item.label.props.to === path) {
                return item.key;
            }
        }
        return null;
    };

    useEffect(() => {
        const selectedKey = findSelectedKey(location.pathname);
        const openKey = items.find(item => item.children?.some(child => child.key === selectedKey))?.key;
        setSelectedKeys(selectedKey ? [selectedKey] : []);
        setOpenKeys(openKey ? [openKey] : []);
    }, [location.pathname]);

    const handleOpenChange = (keys) => {
        // Allow only one submenu to be open at a time
        setOpenKeys(keys.length > 1 ? [keys.pop()] : keys);
    };

    return (
        <div
            style={{
                width: 260,
            }}
            className="sidebar-container"
        >
            <Menu
                className="sidebar"
                mode="inline"
                theme="dark"
                inlineCollapsed={sidebarCollapsed}
                items={items}
                openKeys={openKeys}
                onOpenChange={handleOpenChange}
                selectedKeys={selectedKeys}
            />
        </div>
    );
};

export default Sidebar;
