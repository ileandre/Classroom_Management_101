import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { deleteStudent, postStudent, putStudent } from '../services/student'
import { postComment, putComment } from '../services/comments'
import HomePage from '../screens/HomePage/HomePage'
import ShowStudents from '../screens/ShowStudents/ShowStudents'
import StudentDetails from '../screens/StudentDetails/StudentDetails'
import StudentForm from '../screens/StudentForm/StudentForm'
import StudentEdit from '../screens/StudentEdit/StudentEdit'
import UpdateStudent from '../screens/LandingPage/LandingPage'

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
    currentUser }) {

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
    // console.log(student)
    const index = students.indexOf(student)
    // console.log(index)
    students[index] = studentData
    // console.log(students[index])
    setStudents(students)
    // let stud = []
    // students.forEach(student => {
    //     if (student.id === id) {
    //         console.log(student)
    //         student = {...student, ... studentData}
    //         console.log(student)
    //         debugger
    //     }
    //     stud.push(student)
    //     console.log(stud)
    // })
    // setStudents([...stud])
}

    const handleDelete = async (id) => {
        // console.log(id)
        // debugger
        await deleteStudent(id)
        // debugger
        fetchStudents()
        // const studs = students.filter(student => student.id !== id)
        // setStudents(studs)
        // setStudents(prevState => prevState.filter(student => student.id !== id))
        // console.log(students)
        // debugger
        history.push('/students')
    }

    const handlePutStudent = async (id, studentData) => {
        const updatedStudent = await putStudent(id, studentData)
        fetchStudents()
        // setStudents(prevState => prevState.push(updatedStudent))
        // setStudents(prevState => [...prevState, updatedStudent])
    }
    // console.log(students)

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
        // fetchStudents()
        const newComment = await postComment(commentData)
        console.log("container, 369", newComment)
        debugger
        setComments(prevState => [...prevState, newComment])
        console.log("container, 367", comments)
        debugger
        // setComments(prevState => [...prevState, comment])
        
        if (studentData) {
            // const newStudent = students.filter(student => student.firstName === studentData.firstName && student.lastName === studentData.lastName && student.grade === studentData.grade && student.period === studentData.period)
            students.map(student => {
                // console.log("studentData.firstName: ", typeof studentData.firstName)
                // console.log("student.firstName: ", typeof student.firstName)
                // console.log("studentData.lastName: ", typeof studentData.lastName)
                // console.log("student.lastName: ", typeof student.lastName)
                // console.log("studentData.grade: ", typeof studentData.grade)
                // console.log("student.grade: ", typeof student.grade)
                // console.log("studentData.period: ", typeof studentData.period)
                // console.log("student.period: ", typeof student.period)
                if (student.firstName === studentData.firstName && student.lastName === studentData.lastName && student.grade === Number(studentData.grade) && student.period === Number(studentData.period)) {
                    // console.log(student)
                    // debugger
                    commentData.student_id = student.id
                    // console.log("container, 355:", commentData.student_id, "and", student.id)
                    // debugger
                }
            })
            // console.log(getId)
            // commentData.student_id = getId
            // console.log("container, 365", commentData)
            // debugger
        }
        
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
                        students={students}
                        handlePutStudent={handlePutStudent}
                        handlePostComment={handlePostComment}
                        updateStudent={updateStudent}
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
