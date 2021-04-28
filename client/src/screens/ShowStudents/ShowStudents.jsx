import './ShowStudents.css'

function ShowStudents({students}) {
    console.log(students)
    debugger
    const PeriodButtons = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'All']
    const filterButtons = ['Top 5', 'A-Student', 'B-Student', 'C-Student', 'D-Student', 'F-Student']
    return (
        <div className="showStudents">
            <div className="clipboard-border">
                <div className="clipboard">
                    <h3>Roster</h3>
                    {students.map(student => {
                        {console.log(student)
                            debugger}
                        <div key={student.id} className='student'>
                            <p>{student.firstName}</p>
                            <p>{student.lastName}</p>
                            <p>{student.grade}</p>
                            <p>{student.period}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShowStudents