import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import LandingPage from './screens/LandingPage/LandingPage'
import HomePage from './screens/HomePage/HomePage'
import ShowStudents from './screens/ShowStudents/ShowStudents'
import StudentDetails from './screens/StudentDetails/StudentDetails'
import StudentForm from './screens/LandingPage/LandingPage'
import UpdateStudent from './screens/LandingPage/LandingPage'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'
import { loginUser, registerUser, verifyUser } from './services/auth'
import Layout from './components/shared/Layout/Layout'

function App() {
  // console.log(React.version)
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleRegister = async (formData) => {
    console.log(formData)
    const userData = await registerUser(formData)
    debugger
    console.log(userData)
    setCurrentUser(userData)
    history.push('/')
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path='/students/:id/update' component={UpdateStudent} />
          <Route path='/students/form' component={StudentForm} />
          <Route path='/students/:id' component={StudentDetails} />
          <Route path='/students' component={ShowStudents} />
          <Route path='/register' render={() => <RegisterPage handleRegister={handleRegister} />} />
          <Route path='/login' render={() => <LoginPage handleLogin={handleLogin} />} />
          <Route path='/welcome' component={LandingPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
