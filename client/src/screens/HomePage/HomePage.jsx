import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage({fetchStudents, fetchAllComments}) {

    const handleRoster = async () => {
        await fetchStudents()
        await fetchAllComments()
    }
    return (
        <div className="homepage">
            <div className='board-border'>
                <div className='board'>
                    <p className='quote-title' id='quote-title'>Teacher Quote</p>
                    <p className='quote' id="quote">Do not let others define your success.</p>
                    <div className='studentRoster'>
                        <Link to='/students' onClick={()=>{handleRoster()}}>
                            <p className="roster">Student Roster</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage