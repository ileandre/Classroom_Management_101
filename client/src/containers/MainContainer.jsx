import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { getAllStudents } from '../services/student'
import LandingPage from '../screens/LandingPage/LandingPage'
import HomePage from '../screens/HomePage/HomePage'
import ShowStudents from '../screens/ShowStudents/ShowStudents'
import StudentDetails from '../screens/StudentDetails/StudentDetails'
import StudentForm from '../screens/LandingPage/LandingPage'
import UpdateStudent from '../screens/LandingPage/LandingPage'

function MainContainer() {
    const [students, setStudents] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            const studentData = await getAllStudents()
            console.log(studentData)
            debugger
            setStudents(studentData)
        }
        fetchStudents()
    }, [])

    return (
        <Switch>
            <Route path='/students/:id/update' component={UpdateStudent} />
            <Route path='/students/form' component={StudentForm} />
            <Route path='/students/:id' component={StudentDetails} />
            <Route path='/students' render={() => <ShowStudents students={students}/>} />
            <Route path='/welcome' component={HomePage} />
            <Route path='/' component={LandingPage} />
        </Switch>
    )
}

export default MainContainer
