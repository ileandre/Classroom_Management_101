import './Nav.css'
import { Link } from 'react-router-dom'

function Nav({ currentUser, handleLogout }) {
    return (
        <nav className="nav">
            <p>Classroom Management 101</p>
            {
                currentUser ?
                    <div className="auth">
                        <p> Hi, {currentUser.firstName}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    :
                    <div className="auth">
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