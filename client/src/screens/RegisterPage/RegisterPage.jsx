import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'

function RegisterPage(props) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const { firstName, lastName, username, email, password } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <Layout>
            <form onSubmit={(e) => {
                e.preventDefault()
                // handleRegister(formData)
            }}>
                <h1>Register</h1>
                <label>
                    First name:
                    <input
                        type='text'
                        name='first name'
                        value={firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last name:
                    <input
                        type='text'
                        name='last name'
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
                <label>
                    Confirm Password:
                    <input
                        type='password confirmation'
                        name='password_confirmation'
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <Link to='/login'> Login</Link>
                <button>Login</button>
            </form>
        </Layout>
    )
}

export default RegisterPage