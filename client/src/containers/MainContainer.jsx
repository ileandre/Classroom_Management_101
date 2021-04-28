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
    const [top5, setTop5] = useState([])
    const [filteredStuds, setFilteredStuds] = useState([])
    const [period, setPeriod] = useState([])
    useEffect(() => {
        const fetchStudents = async () => {
            const studentData = await getAllStudents()
            // console.log(studentData)
            // debugger
            setStudents(...studentData)
        }
        fetchStudents()
    }, [])

    const handleFilter = (filter) => {
        students.sort((a, b) => {return b.grade - a.grade})
        let studs = []
        if (filter === 'Top 5') {
            const five = students.slice(0, 5)
            setTop5(...five)
        } else if (filter === 'A-Student') {
            studs = students.filter(student => student.grade >= 90)
            setFilteredStuds(...studs)
        } else if (filter === 'B-Student') {
            studs = students.filter(student => student.grade < 90 && student.grade >= 80)
            setFilteredStuds(...studs)
        } else if (filter === 'C-Student') {
            studs = students.filter(student => student.grade < 80 && student.grade >= 70)
            setFilteredStuds(...studs)
        } else if (filter === 'D-Student') {
            studs = students.filter(student => student.grade < 70 && student.grade >= 60)
            setFilteredStuds(...studs)
        } else if (filter === 'F-Student') {
            studs = students.filter(student => student.grade < 60)
            setFilteredStuds(...studs)
        }
    }

    const handlePeriod = (period) => {
        let per = []
        if (period === '1') {
            per = students.filter(student => student.period === 1)
            setPeriod(...per)
        } else if (period === '2') {
            per = students.filter(student => student.period === 2)
            setPeriod(...per)
        } else if (period === '3') {
            per = students.filter(student => student.period === 3)
            setPeriod(...per)
        } else if (period === '4') {
            per = students.filter(student => student.period === 4)
            setPeriod(...per)
        } else if (period === '5') {
            per = students.filter(student => student.period === 5)
            setPeriod(...per)
        }
    }

    return (
        <Switch>
            <Route path='/students/:id/update' component={UpdateStudent} />
            <Route path='/students/form' component={StudentForm} />
            <Route path='/students/:id' component={StudentDetails} />
            <Route path='/students' 
            render={() => <ShowStudents 
                students={students} 
                handleFilter={handleFilter} 
                handlePeriod={handlePeriod}
                filteredStuds={filteredStuds}
                period={period}/>} 
            />
            <Route path='/welcome' component={HomePage} />
            <Route path='/' component={LandingPage} />
        </Switch>
    )
}

export default MainContainer
