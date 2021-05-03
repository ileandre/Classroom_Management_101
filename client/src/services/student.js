import api from './api-helper'

export const getAllStudents = async () => {
    try {
        const resp = await api.get('/students')
        return resp.data
    } catch (error) {
        throw error
    }
}

export const getOneStudent = async (id) => {
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
        const resp = await api.delete(`/students/${id}`)
        return resp
    } catch (error) {
        throw error
    }
}