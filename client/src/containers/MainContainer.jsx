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
    const [students, setStudents] = useState([
        {
            firstName: "Tina",
            grade: 80,
            id: 1,
            lastName: "Feil",
            period: 2,
        },
        {
            id: 2,
            firstName: "Lyndsey",
            lastName: "Bode",
            grade: 67,
            period: 3
        },
        {
            id: 3,
            firstName: "Kris",
            lastName: "Davis",
            grade: 77,
            period: 2
        },
        {
            id: 4,
            firstName: "Mozella",
            lastName: "Ortiz",
            grade: 50,
            period: 5

        },
        {
            id: 5,
            firstName: "Foster",
            lastName: "Metz",
            grade: 87,
            period: 4
        },
        {
            id: 6,
            firstName: "Delaine",
            lastName: "Stanton",
            grade: 96,
            period: 2

        },
        {
            id: 7,
            firstName: "Raymundo",
            lastName: "Kihn",
            grade: 92,
            period: 2
        },
        {
            id: 8,
            firstName: "Cornell",
            lastName: "Sauer",
            grade: 90,
            period: 3
        },
        {
            id: 9,
            user_id: 1,
            firstName: "Darcy",
            lastName: "Flatley",
            grade: 78,
            period: 5
        },
        {
            id: 10,
            firstName: "Merna",
            lastName: "Ortiz",
            grade: 51,
            period: 5
        }
    ])
    const [queryStudents, setQueryStudents] = useState(students)
    const [comments, setComments] = useState([])
    // const [top5, setTop5] = useState([])
    // const [filteredStuds, setFilteredStuds] = useState([])
    // const [period, setPeriod] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            const studentData = await getAllStudents()
            // console.log(studentData)
            // debugger
            // setStudents(studentData)
            // setQueryStudents(studentData)
        }
        fetchStudents()
    }, [])

    const handleFilter = (filter) => {
        students.sort((a, b) => { return b.grade - a.grade })
        console.log('inside filter')
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

    return (
        <Switch>
            <Route path='/students/:id/update' component={UpdateStudent} />
            <Route path='/students/form' component={StudentForm} />
            <Route path='/students/:id'
                render={() => <StudentDetails
                    students={students}
                    queryStudents={queryStudents}
                />}
            />
            <Route path='/students'
                render={() => <ShowStudents
                    students={students}
                    handleFilter={handleFilter}
                    handlePeriod={handlePeriod}
                    queryStudents={queryStudents}
                />}
            />
            <Route path='/welcome' component={HomePage} />
            <Route path='/' component={LandingPage} />
        </Switch>
    )
}

export default MainContainer
