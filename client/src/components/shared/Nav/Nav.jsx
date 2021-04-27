import './Nav.css'
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav className="nav">
            <div className="auth">
                <Link>
                    <p>Login</p>
                </Link>
                <Link>
                    <p>Register</p>
                </Link>
            </div>
        </nav>
    )
}

export default Nav