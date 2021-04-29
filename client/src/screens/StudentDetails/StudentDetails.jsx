import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "./StudentDetails.css"

function StudentDetails({ students, queryComments, fetchComments, handleDelete }) {
    const [student, setStudent] = useState({})
    const params = useParams()
    const { id } = params
    const history = useHistory()

    
    useEffect(() => {
        if (students.length === 0) {
            history.push('/students')
        }
        const stud = students.find(student => student.id === id)
        setStudent(stud)
        fetchComments(Number(id))

    }, [])

    const handleEdit = () => {
        history.push(`/students/${id}/edit`)
    }

    console.log(queryComments)
    

    return (
        <div className='studentDetails'>
            <div className="clipboard-border">
                <div className="clipboard">
                    <div className="student-info">
                        <div className='name-column'>
                            <p className="column-title">Name</p>
                            <p className='stud-info'>{student.firstName} {student.lastName}</p>
                        </div>
                        <div className='grade-column'>
                            <p className="column-title">Grade</p>
                            <p className='stud-info'>{student.grade}</p>
                        </div>
                        <div className='period-column'>
                            <p className="column-title">Period</p>
                            <p className='stud-info'>{student.period}</p>
                        </div>
                    </div>
                    <div className="student-comments">
                        {
                            queryComments.map((comment, index) => (
                                <>
                                    <p key={comment.id}><span>{index + 1})</span> {comment.comment}</p>
                                </>
                            ))
                        }
                    </div>
                    <div className="buttons">
                        <button onClick={() => handleDelete(Number(id))}>Remove</button>
                        <button onClick={() => handleEdit()}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails