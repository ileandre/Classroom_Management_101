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
                {/* <Link to='/students' onClick={() => {handleRoster()}}> */}
                    <p className="roster">Student Roster</p>
                {/* </Link> */}
            </div>
            {/* <div className='board-border'> */}
            {/* <div className='board'> } */}
            {/* <p className='quote-title' id='quote-title'>Student Roster</p>
                    <p className='quote' id="quote">Do not let others define your success.</p>
                    <div className='studentRoster'>
                        <Link to='/students' onClick={()=>{handleRoster()}}>
                            <p className="roster">Student Roster</p>
                        </Link>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </form>
    )
}

export default HomePage