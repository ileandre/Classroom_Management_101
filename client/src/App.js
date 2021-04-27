import './App.css';
import React, {useState} from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import LandingPage from './screens/LandingPage/LandingPage'
import HomePage from './screens/HomePage/HomePage'
import ShowStudents from './screens/ShowStudents/ShowStudents'
import StudentDetails from './screens/StudentDetails/StudentDetails'
import StudentForm from './screens/LandingPage/LandingPage'
import UpdateStudent from './screens/LandingPage/LandingPage'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'
import {loginUser} from './services/auth'

function App() {
  // console.log(React.version)
const [currentUser, setCurrentUser] = useState(null)
// const history = useHistory()

const handleLogin = async (formData) => {
const userData = await loginUser (formData)
setCurrentUser(userData)
// history.push('/')
}

  return (
    <div className="App">
      <Switch>
        <Route path='/:username/students/:id/update' component={UpdateStudent} />
        <Route path='/:username/students/form' component={StudentForm} />
        <Route path='/:username/students/:id' component={StudentDetails} />
        <Route path='/:username/students' component={ShowStudents} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' render={() => <LoginPage handleLogin={handleLogin}/>} />
        <Route path='/welcome' component={LandingPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
