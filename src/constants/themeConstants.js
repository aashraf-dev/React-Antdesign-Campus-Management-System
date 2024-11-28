import { theme } from "antd"

const { darkAlgorithm, defaultAlgorithm } = theme

export const lightTheme = {
    algorithm: defaultAlgorithm,
    token: {
        colorBgBase: '#f8f9fa',
        colorTextBase: '#212529',
        colorPrimary: '#3F51B5',
        colorSuccess: '#2c6e49',
        colorWarning: '#FFC107',
        colorError: '#ef233c',
        colorDisabled: '#9E9E9E',
        colorBgContainer: '#ffffff',
        colorTextDisabled: '#212529',
        colorTextInverse: '#f8f9fa',
        boxShadow: '0px 3px 31px -7px rgba(63, 81, 181, 0.61)'
    }
}

export const darkTheme = {
    algorithm: darkAlgorithm,
    token: {
        colorBgBase: '#0d1321',
        colorTextBase: '#f8f9fa',
        colorPrimary: '#3F51B5',
        colorSuccess: '#2c6e49',
        colorWarning: '#FFC107',
        colorError: '#ef233c',
        colorDisabled: '#9E9E9E',
        colorBgContainer: '#0d1321',
        colorTextDisabled: '#f8f9fa',
        colorTextInverse: '#f8f9fa',
        boxShadow: '0px 3px 31px -7px rgba(63, 81, 181, 0.61)'
    }
}