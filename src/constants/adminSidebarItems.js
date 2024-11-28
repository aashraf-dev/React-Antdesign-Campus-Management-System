import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

export const adminSidebarItems = [
    {
        key: '1',
        icon: < UserOutlined />,
        label: 'Dashboard',
    },
    {
        key: '2',
        icon: '',
        label: 'Students',
        children: [
            {
                key: '3',
                label: 'Add Students'
            },
            {
                key: '4',
                label: 'All Students'
            }
        ]
    },
    {
        key: '5',
        icon: '',
        label: 'Invoices',
        children: [
            {
                key: '6',
                label: 'Create Invoices'
            },
            {
                key: '7',
                label: 'View Invoices'
            },
            {
                key: '8',
                label: 'Invoices Statistics'
            }
        ]
    },
    {
        key: '8',
        icon: '',
        label: 'Staff Mangement',
        children: [
            {
                key: '9',
                icon: '',
                label: 'Teaching Staff'
            },
            {
                key: '10',
                icon: '',
                label: 'Non-Teaching Staff'
            }
        ]
    },
    {
        key: '11',
        icon: '',
        label: 'Results',
        children: [
            {
                key: '12',
                label: 'View Previous reports'
            },
            {
                key: '13',
                label: 'Create new result sheet'
            }
        ]
    },
    {
        key: '14',
        icon: '',
        label: 'Attendance',
        children: [
            {
                key: '15',
                label: 'View Attendance Reports'
            },
            {
                key: '16',
                label: 'Edit Attendance'

            }
        ]
    }
]