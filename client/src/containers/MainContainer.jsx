import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { getAllStudents } from '../services/student'
import { getAllComments } from '../services/comments'
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
    const [comments, setComments] = useState([
        {
            id: 1,
            student_id: 1,
            comment: "Cum velit quam. Occaecati non qui. Nobis est sit.",
        },
        {
            id: 2,
            student_id: 1,
            comment: "Vitae impedit sunt. Nisi labore dolor. Ut distinctio placeat.",
        },
        {
            id: 3,
            student_id: 3,
            comment: "Eum aut temporibus. Reiciendis ut et. Maxime aut voluptatem.",
        },
        {
            id: 4,
            student_id: 3,
            comment: "Pariatur et laborum. Alias reprehenderit eius. Iste quae suscipit.",
        },
        {
            id: 5,
            student_id: 3,
            comment: "Voluptas perspiciatis sequi. Et earum architecto. Assumenda neque necessitatibus.",
        },
        {
            id: 6,
            student_id: 3,
            comment: "Illum autem incidunt. Voluptatem quasi amet. Sed sed ab.",
        },
        {
            id: 7,
            student_id: 3,
            comment: "Aut nihil illo. Ut aut sint. Commodi velit pariatur.",
        },
        {
            id: 8,
            student_id: 3,
            comment: "Id accusantium autem. Ut est repudiandae. Sit rerum voluptatibus.",
        },
        {
            id: 9,
            student_id: 3,
            comment: "Iure ut veniam. Eligendi quia ut. Cum quod omnis.",
        },
        {
            id: 10,
            student_id: 4,
            comment: "Laborum delectus nisi. Impedit quibusdam illum. Explicabo rerum temporibus.",
        },
        {
            id: 13,
            student_id: 5,
            comment: "Quo eveniet temporibus. Sunt veritatis nisi. Sunt natus quo.",
        },
        {
            id: 14,
            student_id: 5,
            comment: "Mollitia itaque ea. Mollitia cupiditate officia. Voluptatem porro excepturi.",
        },
        {
            id: 15,
            student_id: 5,
            comment: "Assumenda voluptatum quidem. Amet aliquid sed. Omnis cumque nihil.",
        },
        {
            id: 16,
            student_id: 6,
            comment: "Nostrum deserunt officiis. Saepe velit nesciunt. Cumque velit iure.",
        },
        {
            id: 17,
            student_id: 6,
            comment: "Illo aut dignissimos. Omnis sapiente dicta. Quo ut nulla.",
        },
        {
            id: 18,
            student_id: 6,
            comment: "Sint tempora vitae. Quod consequuntur at. Non exercitationem aliquam.",
        },
        {
            id: 19,
            student_id: 7,
            comment: "Expedita magni nostrum. Occaecati ut iusto. Officiis magnam quis.",
        },
        {
            id: 20,
            student_id: 7,
            comment: "Doloribus iure minima. Aut doloribus assumenda. Voluptatem cupiditate dolorem.",
        },
        {
            id: 21,
            student_id: 7,
            comment: "Ex odio non. Iusto ut nam. Ea velit sed.",

        },
        {
            id: 22,
            student_id: 8,
            comment: "Deleniti dolor occaecati. Nesciunt quia accusamus. Enim impedit facere.",
        },
        {
            id: 23,
            student_id: 8,
            comment: "Dolores dolor voluptatem. Qui itaque corrupti. Voluptatibus doloribus perferendis.",
        },
        {
            id: 24,
            student_id: 8,
            comment: "Vel ad quo. Consequuntur quis sapiente. Odit est sed.",
        },
        {
            id: 25,
            student_id: 9,
            comment: "Minima numquam dicta. Sunt repudiandae culpa. Laudantium praesentium voluptates.",
            "created_at": "2021-04-27T21:07:48.435Z",
            "updated_at": "2021-04-27T21:07:48.435Z"
        },
        {
            id: 26,
            student_id: 9,
            comment: "Maxime consequatur et. Beatae magnam quasi. Eos accusantium et.",
        },
        {
            id: 27,
            student_id: 9,
            comment: "Tempora et at. Enim debitis et. Quia suscipit voluptatum.",
        },
        {
            id: 28,
            student_id: 10,
            comment: "Ullam voluptatibus animi. Eveniet autem omnis. Nemo quia quam.",
        },
        {
            id: 29,
            student_id: 10,
            comment: "Amet iste quo. Voluptatem qui sed. Ut nobis alias.",
        },
        {
            id: 30,
            student_id: 10,
            comment: "Aspernatur non accusantium. Ipsa cumque sit. Facere ut architecto.",
        }
    ])
    const [queryComments, setQueryComments] = useState([])

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

    useEffect(() => {
        const fetchComments = async () => {
            const CommentData = await getAllComments()
            // console.log(studentData)
            // debugger
            // setComments(studentData)
        }
        fetchComments()
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

    const fetchComments = (id) => {
        const comment = comments.filter(comment => comment.student_id === id)
        setQueryComments(comment)
    }

    return (
        <Switch>
            <Route path='/students/:id/update' component={UpdateStudent} />
            <Route path='/students/form' component={StudentForm} />
            <Route path='/students/:id'
                render={() => <StudentDetails
                    students={students}
                    queryComments={queryComments}
                    fetchComments={fetchComments}
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
