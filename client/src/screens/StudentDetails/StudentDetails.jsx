import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function StudentDetails({ students, queryStudents }) {
    const [student, setStudent] = useState({})
    const params = useParams()
    const { id } = params

    useEffect(() => {
        const stud = students.find(student => student.id === Number(id))
        setStudent(stud)
    }, [])

    return (
        <div>
            <div classname="student-info">
                <div className='name-column'>
                    <p classname="column-title">Name</p>
                    <p classname='stud-info'>{student.firstName} {student.lastName}</p>
                </div>
                <div className='grade-column'>
                    <p classname="column-title">Grade</p>
                    <p classname='stud-info'>{student.grade}</p>
                </div>
                <div className='period-column'>
                    <p classname="column-title">Period</p>
                    <p classname='stud-info'>{student.period}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails