import './ShowStudents.css'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

function ShowStudents({ handleFilter, handlePeriod, queryStudents, fetchStudents, fetchAllComments }) {
const history = useHistory()

    const filterButtons = ['Top 5', 'A-Student', 'B-Student', 'C-Student', 'D-Student', 'F-Student']
    const periodButtons = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'All']

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
                <div className="clipboard show-clipboard">
                    <h3 className="roster-title">Student Roster</h3>
                    <div className="students-list">
                        <div className='column student'>
                            <p className="column-title">First
                                </p>
                            <div className="students">
                                {queryStudents.map(student => (
                                    <Link to={`/students/${student.id}`} key={student.id} className='student'>
                                        <>
                                            <p>{student.firstName}</p>
                                        </>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='column student'>
                            <p className="column-title">Last</p>
                            <div className="students">
                                {queryStudents.map(student => (
                                    <Link to={`/students/${student.id}`} key={student.id} className='student'>
                                        <>
                                            <p>{student.lastName}</p>
                                        </>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='column student'>
                            <p className="column-title">Grade</p>
                            <div className="students">
                                {queryStudents.map(student => (
                                    <Link to={`/students/${student.id}`} key={student.id} className='student'>
                                        <>
                                            <p>{student.grade}%</p>
                                        </>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='column student'>
                            <p className="column-title">Period</p>
                            <div className="students">
                                {queryStudents.map(student => (
                                    <Link to={`/students/${student.id}`} key={student.id} className='student'>
                                        <>
                                            <p>{student.period}</p>
                                        </>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className='addStudent-button' onClick={() => {history.push('/students/form')}}>Add Student</button>
                </div>
            </div>
            <div className='filterButtons-container buttons'>
                {
                    filterButtons.map((filter, index) => (
                        <button className="button green-buttons" key={index} onClick={() => handleFilter(filter)}>{filter}</button>
                    ))
                }
            </div>
            <div className='periodButtons-container buttons'>
                {
                    periodButtons.map((period, index) => (
                        <button className="button red-buttons" key={index} onClick={() => handlePeriod(period)}>{period}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowStudents