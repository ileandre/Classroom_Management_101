import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage(props) {
    return (
        <div className="homepage">
            <div className='board-border'>
                <div className='board'>
                    <p>Teacher Quote(s)</p>
                    <div className='studentRoster'>
                        <Link to='/students'>
                            <p>Student Roster</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage