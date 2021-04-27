import './HomePage.css'
import {Link} from 'react-router-dom'

function HomePage(props) {
    return (
        <div className="homepage">
            <p>Teacher Quote(s)</p>
            <div className='studentRoster'>
                <Link to='/students'>
                    <p>Student Roster</p>
                </Link>
            </div>
            <p></p>
        </div>
    )
}

export default HomePage