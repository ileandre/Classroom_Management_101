import api from './api-helper'

export const getAllStudents = async () => {
    try {
        // console.log("inside getAllStudents inside services")
        // debugger
        // const token = localStorage.getItem('authToken')
        //     // console.log("token extracted", token)
        //     api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get('/students')
        console.log(resp)
        // debugger
        return resp.data
    } catch (error) {
        throw error
    }
}

export const getOnStudent = async (id) => {
    try {
        const resp = await api.get(`/students/${id}`)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const postStudent = async (studentData) => {
    try {
        const resp = await api.post('/students', { student: studentData })
        return resp.data
    } catch (error) {
        throw error
    }
}

export const putStudent = async (id, studentData) => {
    try {
        const resp = await api.put(`/students/${id}`, { student: studentData })
        return resp.data
    } catch (error) {
        throw error
    }
}

export const deleteStudent = async (id) => {
    try {
        console.log(id)
        debugger
        const resp = await api.delete(`/students/${id}`)
        return resp
    } catch (error) {
        throw error
    }
}