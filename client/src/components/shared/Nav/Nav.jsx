import './Nav.css'
import { Link } from 'react-router-dom'

function Nav({ currentUser, handleLogout }) {
    return (
        <nav className="nav">
            {
                currentUser ?
                    <div className="auth">
                        <div className='left-nav'>
                            <Link to='/welcome'>
                                <p className="appName">Classroom Management 101</p>
                            </Link>
                            <div className="navigate">

                                <Link to='/students'>
                                    <p>Student Roster</p>
                                </Link>
                                <Link to='/students/form'>
                                    <p>Add Student</p>
                                </Link>
                            </div>
                        </div>
                        <div className="user-logout">
                            <p> Hi, {currentUser.firstName}</p>
                            <p onClick={handleLogout}>Logout</p>
                        </div>

                    </div>
                    :
                    <div className="auth unauth">
                        <div className="landing-appName">
                            <Link to='/'>
                                <p className="appName" >Classroom Management 101</p>
                            </Link>
                        </div>
                        <div className="login-register">
                            <Link to='/login'>
                                <p>Login</p>
                            </Link>
                            <Link to='/register'>
                                <p>Register</p>
                            </Link>
                        </div>
                    </div>

            }
        </nav>
    )
}

export default Nav