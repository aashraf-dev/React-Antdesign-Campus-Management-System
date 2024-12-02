import React, { useState } from 'react'
import Sidebar from '../../components/admin/Sidebar'
import TopNav from '../../components/admin/TopNav'
import { Flex, Layout } from 'antd'



const AdminLayout = ({ children, pageTitle}) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Flex gap='small' align='start' justify='between'>
            <Sidebar sidebarCollapsed={collapsed} />
            <Layout className='admin-layout' style={{ marginLeft: collapsed ? -160 : -10, transition: 'margin-left .25s ease-in-out' }}>
                <TopNav toggleSidebar={toggleCollapsed} sidebarCollapsed={collapsed} pageTitle={pageTitle} />
                {children}
            </Layout>
        </Flex>
    )
}

export default AdminLayout