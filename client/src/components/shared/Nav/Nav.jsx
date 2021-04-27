import './Nav.css'
import { Link } from 'react-router-dom'

function Nav({ currentUser }) {
    return (
        <nav className="nav">
            {
                currentUser ?
                    <div className="auth">
                        <p> Hi, {currentUser.name}</p>
                        <button>Logout</button>
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