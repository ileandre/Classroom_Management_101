import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function RegisterPage({ handleRegister, currentUser }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        quote: '',
        username: '',
        email: '',
        password: ''
    })
    const { firstName, lastName, username, email, password} = formData
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
        <form onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
        }}>
            <h1>Register</h1>
            <label>
                First name:
                    <input
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:
                    <input
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Username:
                    <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                    <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                    <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
            </label>
            <Link to='/login'> Login</Link>
            <button>Register</button>
        </form>
    )
}

export default RegisterPage