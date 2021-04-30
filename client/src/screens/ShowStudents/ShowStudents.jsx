import './ShowStudents.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FilterButton from '../../components/FilterButton/FilterButton'
// import PeriodButton from '../../components/PeriodButton/PeriodButton'

function ShowStudents({ students, handleFilter, handlePeriod, queryStudents, fetchStudents, fetchAllComments }) {
    // console.log(students)
    // debugger

    const filterButtons = ['Top 5', 'A-Student', 'B-Student', 'C-Student', 'D-Student', 'F-Student']
    const periodButtons = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'All']

    // console.log("students:", students)
    // console.log("queryStudents:", queryStudents)
    useEffect(() => {
        const handleRoster = async () => {
            await fetchStudents()
            await fetchAllComments()
        }
        handleRoster()
    }, [])

    return (
        <div className="showStudents">
            <div className="clipboard-border">
                <div className="clipboard">
                    <h3 className="roster-title">Student Roster</h3>
                    <div className='column-title student'>
                        <p>First</p>
                        <p>Last</p>
                        <p>Grade</p>
                        <p>Period</p>
                    </div>
                    <div className="students-list">
                        {queryStudents.map(student => (
                            <Link to={`/students/${student.id}`} key={student.id} className='student'>
                                <>
                                    <p>{student.firstName}</p>
                                    <p>{student.lastName}</p>
                                    <p>{student.grade}</p>
                                    <p>{student.period}</p>
                                </>
                            </Link>
                        ))}
                    </div>
                    <Link to="students/form" className='addStudent-button'>Add Student</Link>
                </div>
            </div>
            <div className='filterButtons-container buttons'>
                {
                    filterButtons.map((filter, index) => (
                        <button  className="button red-buttons" key={index} onClick={() => handleFilter(filter)}>{filter}</button>
                    ))
                }
            </div>
            <div className='periodButtons-container buttons'>
                {
                    periodButtons.map((period, index) => (
                        <button className="button green-buttons" key={index} onClick={() => handlePeriod(period)}>{period}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowStudents