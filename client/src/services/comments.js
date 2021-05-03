import api from './api-helper'

export const getAllComments = async () => {
    try {
        const resp = await api.get('/comments')
        return resp.data
    } catch (error) {
        throw error
    }
}

export const getStudentComments = async (id) => {
    try {
        const resp = await api.get(`/comments/${id}`)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const postComment = async (commentData) => {
    try {
        const resp = await api.post('/comments', { comment: commentData })
        
        return resp.data
    } catch (error) {
        throw error
    }
}

export const putComment = async (commentData) => {
    try {
        const resp = await api.put(`/comments`, { student: commentData })
        return resp.data
    } catch (error) {
        throw error
    }
}
