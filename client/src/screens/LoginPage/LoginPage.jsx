import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./LoginPage.css"
function LoginPage({ handleLogin, currentUser }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData
    const history = useHistory()

    if (currentUser) {
        history.push("/")
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="loginPage">
            <form className="login-form" onSubmit={(e) => {
                e.preventDefault()
                handleLogin(formData)
            }}>
                <h1 className="login-title">Login</h1>
                <label className="login-inputs">
                    Username: 
                    <input
                        className="input"
                        type='text'
                        name='username'
                        value={username}
                        onChange={handleChange}
                    />
                </label>
                <label className="login-inputs">
                    Password: 
                    <input
                        className="input"
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </label>
            <Link to='/register' className="register-link"> No Account? Register</Link>
            <button className="login-button">Login</button>
        </form>
        </div >
    )
}

export default LoginPage