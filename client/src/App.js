import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'
import { getAllStudents } from './services/student'
import { getAllComments } from './services/comments'
import LandingPage from './screens/LandingPage/LandingPage'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import Layout from './components/shared/Layout/Layout'
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [students, setStudents] = useState([])
  const [comments, setComments] = useState([])
  const [queryStudents, setQueryStudents] = useState(students)
  const [queryComments, setQueryComments] = useState([])
  const history = useHistory()

  const fetchStudents = async () => {
    const studentData = await getAllStudents()

    setStudents(studentData)
    setQueryStudents(studentData)
  }

  const fetchAllComments = async () => {
    const commentData = await getAllComments()

    setComments(commentData)
  }

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])


  const fetchStudComments = async (id) => {    
    const studComments = comments.filter(comment => comment.student_id === id)
    setQueryComments([...studComments])
  }


  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/welcome')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route exact path='/register'>
            <RegisterPage
              handleRegister={handleRegister}
              currentUser={currentUser}
            />
          </Route>
          <Route exact path='/login'>
            <LoginPage
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/'>
            {currentUser ?
              <MainContainer
              students={students}
              setStudents={setStudents}
              queryStudents={queryStudents}
              setQueryStudents={setQueryStudents}
              fetchStudents={fetchStudents}
              setComments={setComments}
              fetchStudComments={fetchStudComments}
              queryComments={queryComments}
              setQueryComments={setQueryComments}
              fetchAllComments={fetchAllComments}
              comments={comments}
              />
              : <LandingPage />}
          </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
