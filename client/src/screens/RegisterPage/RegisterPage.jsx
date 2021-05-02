import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./RegisterPage.css"

function RegisterPage({ handleRegister, currentUser }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        quote: '',
        username: '',
        email: '',
        password: ''
    })
    const { firstName, lastName, username, email, password } = formData
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
        <div className="registerPage"  >
            <form className="register-form" onSubmit={(e) => {
                e.preventDefault()
                handleRegister(formData)
            }}>
                <h1 className="register-title">Register</h1>
                <div className="form-inputs">
                    <label className="input-labels">
                        First name:
                        <input
                            className="input"
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input-labels">
                        Last name:
                        <input
                            className="input"
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input-labels">
                        Username:
                        <input
                            className="input"
                            type='text'
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input-labels">
                        Email:
                        <input
                            className="input"
                            type='text'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input-labels">
                        Password:
                        <input
                            className="input"
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <Link to='/login' className="login-link"> Already have an account? Login</Link>
                <button className="register-button"> Register</button>
            </form>
        </div>
    )
}

export default RegisterPage