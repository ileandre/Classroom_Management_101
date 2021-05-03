import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import "./StudentForm.css"

function StudentForm({handlePostStudent, handlePostComment}) {
    const history = useHistory()
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        period: '',
    })
    const [commentData, setCommentData] = useState({
        student_id: 0,
        comment: ''
    })
    const { firstName, lastName, grade, period } = studentData
    const { comment } = commentData

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
    
const handleCreateComment = async () => {
    console.log("form, 44, comment: ", commentData)
    console.log("form 45, student: ", studentData)
    debugger
    await handlePostComment(commentData, studentData)
    console.log("form, 48, comment: ", commentData)
    console.log("form, 49, student: ", studentData)
    debugger
}

    const handleCreateStudent = async (e) => {
        e.preventDefault()
        console.log("form, 54", studentData)
        await handlePostStudent(studentData)
        debugger
        
        if (comment) {
            await handleCreateComment()
        }
        console.log('before history push')
        debugger
        history.push(`/students`)
    }

    return (
        <div className='student-form'>
            <div className="clipboard-border">
                <div className="clipboard form-clipboard">
                    <div className="student-info-form">
                        <label className="firstName-column column">First name:
                            <input
                            className="input"
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="lastName-column column">Last name:
                            <input
                                className="input"
                                type='text'
                                name='lastName'
                                value={lastName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="grade-column column">Grade:
                            <input
                                className="input"
                                type='text'
                                name='grade'
                                value={grade}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="period-column column">Period:
                            <input
                                className="input"
                                type='text'
                                name='period'
                                value={period}
                                onChange={handleStudentChange}
                            />
                        </label>
                    </div>
                    <label className="student-comments-form column">Comments
                        <textarea
                            className="textarea"
                            type='text'
                            name='comment'
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </label>
                    <div className="buttons">
                        <button className="button green-buttons" onClick={(e)=>handleCreateStudent(e)}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentForm