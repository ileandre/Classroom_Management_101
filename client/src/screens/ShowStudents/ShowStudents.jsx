import './ShowStudents.css'
import FilterButton from '../../components/FilterButton/FilterButton'
// import PeriodButton from '../../components/PeriodButton/PeriodButton'

function ShowStudents({ students, handleFilter, handlePeriod }) {
    // console.log(students)
    // debugger

    const filterButtons = ['Top 5', 'A-Student', 'B-Student', 'C-Student', 'D-Student', 'F-Student']
    const periodButtons = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'All']
    
    if (!students) {
        return <h1>"Loading ..."</h1>
    }
    console.log("students:", students)

    return (
        <div className="showStudents">
            <div className="clipboard-border">
                <div className="clipboard">
                    <h3>Roster</h3>
                    {students.map(student => (
                        <div key={student.id} className='student'>
                            <>
                            <p>{student.firstName}</p>
                            <p>{student.lastName}</p>
                            <p>{student.grade}</p>
                            <p>{student.period}</p>
                            </>
                        </div>
                    ))}
                </div>
            </div>
            <div className='buttons-container'>
                {
                    filterButtons.map((filter, index) => (
                        <button key={index} onClick={() => handleFilter(filter)}>{filter}</button>
                    ))
                }
                {
                    periodButtons.map((period, index) => (
                        <button key={index} onClick={() => handlePeriod(period)}>{period}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowStudents