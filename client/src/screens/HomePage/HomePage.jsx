import './HomePage.css'
import { useHistory } from 'react-router-dom'

function HomePage({ fetchStudents, fetchAllComments }) {
const history = useHistory()

    const handleRoster = async () => {
        await fetchStudents()
        await fetchAllComments()
        history.push('/students')
    }
    return (
        <form className="homepage" onClick={() => {handleRoster()}}>
            <div className="roster-book">
                    <p className="roster">Student Roster</p>
            </div>

        </form>
    )
}

export default HomePage