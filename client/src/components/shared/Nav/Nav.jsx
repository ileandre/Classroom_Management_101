import './Nav.css'
import { Link } from 'react-router-dom'

function Nav({ currentUser, handleLogout }) {
    return (
        <nav className="nav">
            <Link to='/welcome'>
                <p>Classroom Management 101</p>
            </Link>
            {
                currentUser ?
                    <div className="auth">
                        <div className="user-logout">
                            <p> Hi, {currentUser.firstName}</p>
                            <p onClick={handleLogout}>Logout</p>
                        <div className="navigate">
                            <Link to='/students'>
                                <p>Student Roster</p> 
                            </Link>
                            <Link to='/students/form'>
                                <p>Add Student</p>
                            </Link>
                        </div>
                        </div>
                        
                    </div>
                    :
                    <div className="auth unauth">
                        <Link to='/login'>
                            <p>Login</p>
                        </Link>
                        <Link to='/register'>
                            <p>Register</p>
                        </Link>
                    </div>

            }
        </nav>
    )
}

export default Nav