import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getStudentComments } from '../../services/comments'
import { getOneStudent } from '../../services/student'
import "./StudentDetails.css"

function StudentDetails({ handleDelete }) {
    const [student, setStudent] = useState({})
    const [studentComments, setStudentComments] = useState([])
    const params = useParams()
    const { id } = params
    const history = useHistory()

    useEffect(() => {
        const fetchOneStudent = async () => {
          const stud = await getOneStudent(Number(id));
          setStudent(stud)
        }
        fetchOneStudent()

        const fetchStudentComments = async () => {
          const comments = await getStudentComments(Number(id));
          setStudentComments(comments)

        }
        fetchStudentComments()
      }, [id])

    const handleEdit = () => {
        history.push(`/students/${id}/edit`)
    } 

    return (
        <div className='student-details'>
            <div className="clipboard-border">
                <div className="clipboard details-clipboard">
                    <p className="student-name">{student?.firstName} {student.lastName}</p>
                    <div className="student-info">
                        <div className='grade-column column'>
                            <p className="column-title">Grade</p>
                            <p className='stud-info'>{student?.grade}%</p>
                        </div>
                        <div className='period-column column'>
                            <p className="column-title">Period</p>
                            <p className='stud-info'>{student?.period}</p>
                        </div>
                    </div>
                    <div className="student-comments">
                        {
                            studentComments.map((comment, index) => (
                                <>
                                    <p key={comment.id}>{index+1}) {comment.comment}</p>
                                </>
                            ))
                        }
                    </div>
                    <div className="details-button">
                        <button className=' button red-buttons remove-button' onClick={() => handleDelete(Number(id))}>Remove</button>
                        <button className='button green-buttons edit-button' onClick={() => handleEdit()}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails