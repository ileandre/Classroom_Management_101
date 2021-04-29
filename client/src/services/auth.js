import api from './api-helper.js'

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('authToken', resp.data.token)
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
}

export const registerUser = async (registerData) => {
    const resp = await api.post('/users', { user: registerData })
    localStorage.setItem('authToken', resp.data.token)
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken')
    if (token) {
        // console.log("token extracted", token)
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get('/auth/verify')
        // console.log(resp)
        return resp.data
    }
    return null
}

export const removeToken = () => {
    api.defaults.headers.common.authorization = null
}