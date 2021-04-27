import './Nav.css'
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav className="nav">
            <div className="auth">
                <Link to='/login'>
                    <p>Login</p>
                </Link>
                <Link to='/register'>
                    <p>Register</p>
                </Link>
            </div>
        </nav>
    )
}

export default Nav