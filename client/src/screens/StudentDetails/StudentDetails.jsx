import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getStudentComments } from '../../services/comments'
import { getOneStudent } from '../../services/student'
import "./StudentDetails.css"

function StudentDetails({ students, queryComments, setQueryComments, fetchStudComments, handleDelete, handleTrashComment }) {
    const [student, setStudent] = useState({})
    const [studentComments, setStudentComments] = useState([])
    // const [student, setStudent] = useState({
    //     firstName: '',
    //     lastName: '',
    //     grade: 0,
    //     period: 0
    // })
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
          console.log(comments)
          setStudentComments(comments)

        }
        fetchStudentComments()
      }, [])

    useEffect(() => {
        // console.log(students)
        // if (students.length === 0) {
        //     history.push('/students')
        // }
        // console.log(students)
        // debugger
        // const stud = students.find(student => student.id === Number(id))
        // setStudent(stud)
        // console.log("details, 42, before fetch comments, student", student)
        // debugger
    }, [])

    const handleEdit = () => {
        history.push(`/students/${id}/edit`)
    }
    
    // console.log(queryComments)
    
    
    return (
        <div className='studentDetails'>
            {/* {console.log(student)} */}
            <div className="clipboard-border">
                <div className="clipboard">
                    <div className="student-info">
                        <div className='name-column column'>
                            <p className="column-title">Name</p>
                            <p className='stud-info'>{student?.firstName} {student?.lastName}</p>
                        </div>
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
                                    <p key={comment.id}><span>{index+1})</span> {comment.notes}</p> <p className='trash' onClick={()=> handleTrashComment(Number(id))}>🗑️</p>
                                </>
                            ))
                        }
                    </div>
                    <div className="buttons">
                        <button className=' button red-buttons remove-button' onClick={() => handleDelete(Number(id))}>Remove</button>
                        <button className='button green-buttons edit-button' onClick={() => handleEdit()}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails