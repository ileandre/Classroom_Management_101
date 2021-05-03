import { Switch, Route, useHistory } from 'react-router-dom'
import { deleteStudent, postStudent, putStudent } from '../services/student'
import { postComment } from '../services/comments'
import HomePage from '../screens/HomePage/HomePage'
import ShowStudents from '../screens/ShowStudents/ShowStudents'
import StudentDetails from '../screens/StudentDetails/StudentDetails'
import StudentForm from '../screens/StudentForm/StudentForm'
import StudentEdit from '../screens/StudentEdit/StudentEdit'

function MainContainer({
    students,
    setStudents,
    queryStudents,
    setQueryStudents,
    fetchStudents,
    setComments,
    fetchStudComments,
    queryComments,
    setQueryComments,
    comments,
    fetchAllComments,
    }) {

    const history = useHistory()

    const handleFilter = (filter) => {
        students.sort((a, b) => { return b.grade - a.grade })
        // console.log('inside filter')
        let studs = []
        if (filter === 'Top 5') {
            const five = students.slice(0, 5)
            setQueryStudents(five)
        } else if (filter === 'A-Student') {
            studs = students.filter(student => student.grade >= 90)
            setQueryStudents(studs)
        } else if (filter === 'B-Student') {
            studs = students.filter(student => student.grade < 90 && student.grade >= 80)
            setQueryStudents(studs)
        } else if (filter === 'C-Student') {
            studs = students.filter(student => student.grade < 80 && student.grade >= 70)
            setQueryStudents(studs)
        } else if (filter === 'D-Student') {
            studs = students.filter(student => student.grade < 70 && student.grade >= 60)
            setQueryStudents(studs)
        } else if (filter === 'F-Student') {
            studs = students.filter(student => student.grade < 60)
            setQueryStudents(studs)
        } else {
            setQueryStudents(students)
        }
    }

    const handlePeriod = (period) => {
        let per = []
        if (period.includes('1')) {
            per = students.filter(student => student.period === 1)
            setQueryStudents(per)
        } else if (period.includes('2')) {
            per = students.filter(student => student.period === 2)
            setQueryStudents(per)
        } else if (period.includes('3')) {
            per = students.filter(student => student.period === 3)
            setQueryStudents(per)
        } else if (period.includes('4')) {
            per = students.filter(student => student.period === 4)
            setQueryStudents(per)
        } else if (period.includes('5')) {
            per = students.filter(student => student.period === 5)
            setQueryStudents(per)
        } else {
            setQueryStudents(students)
        }

    }

const updateStudent = (students, studentData, id) => {
    const student = students.find(student => student.id === id)
    const index = students.indexOf(student)
    students[index] = studentData
    setStudents(students)

}

    const handleDelete = async (id) => {
        await deleteStudent(id)
        fetchStudents()
        history.push('/students')
    }

    const handlePutStudent = async (id, studentData) => {
        const updatedStudent = await putStudent(id, studentData)
        fetchStudents()
    }

    const handlePostStudent = async (studentData) => {
        console.log("container, 330", studentData)
        debugger
        const student = await postStudent(studentData)
        console.log("container, 333", student)
        debugger
        fetchStudents()
        setStudents(prevState => prevState.push(student))
        console.log("container, 337", students)
        debugger
    }

    const handlePostComment = async (commentData, studentData = {}) => {
        
        if (studentData) {
            console.log (students)
            students.map(student => {
                if (student.firstName === studentData.firstName && student.lastName === studentData.lastName && student.grade === Number(studentData.grade) && student.period === Number(studentData.period)) {
                    console.log(student)
                    debugger
                    commentData.student_id = student.id
        
                }
            })
        }
            const newComment = await postComment(commentData)
            console.log("container, 369", newComment)
            debugger
            setComments(prevState => [...prevState, newComment])
            console.log("container, 367", comments)
            debugger
      
        
    }

    return (
        <>
            <Switch>
                <Route exact path='/students/form'>
                    <StudentForm
                        handlePostComment={handlePostComment}
                        handlePostStudent={handlePostStudent}

                    />
                </Route>

                <Route exact path='/students/:id/edit'>
                    <StudentEdit
                        handlePutStudent={handlePutStudent}
                        students={students}
                        handlePostComment={handlePostComment}
                        fetchStudents={fetchStudents}
                    />
                </Route>

                <Route exact path='/students/:id'>
                    <StudentDetails
                        students={students}
                        queryComments={queryComments}
                        fetchStudComments={fetchStudComments}
                        handleDelete={handleDelete}
                        setQueryComments={setQueryComments}
                    />
                </Route>
                <Route exact path='/students'>
                    <ShowStudents
                        students={students}
                        handleFilter={handleFilter}
                        handlePeriod={handlePeriod}
                        queryStudents={queryStudents}
                        fetchStudents={fetchStudents}
                        fetchAllComments={fetchAllComments}
                    />
                </Route>
                <Route exact path='/welcome'>
                    <HomePage
                        fetchStudents={fetchStudents}
                        fetchAllComments={fetchAllComments}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default MainContainer
