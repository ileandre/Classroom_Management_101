import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "./StudentForm.css"

function StudentForm({handlePostStudent, handlePostComment}) {
    const [student, setStudent] = useState({})
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

    // useEffect(() => {
    //     console.log(id)
    //     const stud = students.find(student => student.id === Number(id))
    //     setStudent(stud)
    //     fetchComments(Number(id))
    // }, [])

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
    console.log("comment: ", commentData)
    console.log("student: ", studentData)
    debugger
    await handlePostComment(commentData, studentData)
    console.log("comment: ", commentData)
    console.log("student: ", studentData)
    debugger
}

    const handleCreateStudent = async () => {
        console.log("form, 51", studentData)
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
        <div className='studentDetails'>
            <div className="clipboard-border">
                <div className="clipboard">
                    <div className="student-info">
                        <label className="firstName-column">First name
                            <input
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="lastName-column">Last name
                            <input
                                type='text'
                                name='lastName'
                                value={lastName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="grade-column">Grade
                            <input
                                type='text'
                                name='grade'
                                value={grade}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="period-column">Period
                            <input
                                type='text'
                                name='period'
                                value={period}
                                onChange={handleStudentChange}
                            />
                        </label>
                    </div>
                    <div className="student-comments">Comments
                        <textarea
                            type='text'
                            name='comment'
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </div>
                    <div className="buttons">
                        <button onClick={()=>handleCreateStudent()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentForm