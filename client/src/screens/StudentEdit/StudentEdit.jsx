import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "./StudentEdit.css"

function StudentEdit({ handlePutStudent, students, handlePostComment, fetchStudents }) {
    const params = useParams()
    const { id } = params
    const history = useHistory()
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        period: ''
    })
    const [commentData, setCommentData] = useState({
        student_id: Number(id),
        comment: ''
    })
    const { firstName, lastName, grade, period } = studentData
    const { comment } = commentData

    useEffect(() => {
        if (students.length === 0) {
            history.push(`/students`)
        } else {
        const stud = students.find(student => student.id === Number(id))
        setStudentData({
            firstName: stud.firstName,
            lastName: stud.lastName,
            grade: stud.grade,
            period: stud.period
        })
    }
    }, [])

    { }

    const handleStudentChange = (e) => {
        const { name, value } = e.target
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleCommentChange = (e) => {
        const { name, value } = e.target
        setCommentData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        fetchStudents()
        await handlePutStudent(Number(id), studentData)
        if (comment) {
            await handlePostComment(commentData)
        }
        history.push(`/students/${id}`)
    }

    return (
        <div className='edit-student'>
            <div className="clipboard-border">
                <form className="clipboard edit-clipboard" onSubmit={(e) => handleUpdate(e)} >
                    <div className="student-info-edit">
                  <>
                  <label className="firstName-column column">First name:
                            <input
                                className='input'
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="lastName-column column">Last name: 
                            <input
                                className='input'
                                type='text'
                                name='lastName'
                                value={lastName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        </>
                        <>
                        <label className="grade-column column">Grade: 
                            <input
                                className='input'
                                type='number'
                                name='grade'
                                value={grade}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="period-column column">Period: 
                            <input
                                className='input'
                                type='number'
                                name='period'
                                value={period}
                                onChange={handleStudentChange}
                            />
                        </label>
                        </>
                    </div>
                    <label className="student-comments-edit column">New comment 
                        <textarea
                            className='textarea'
                            type='text'
                            name='comment'
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </label>
                    <button className="update-button button"> Update</button>
                </form>
            </div>
        </div>
    )
}

export default StudentEdit
