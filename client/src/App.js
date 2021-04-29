import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'
import { getAllStudents } from './services/student'
import { getAllComments } from './services/comments'
import LandingPage from './screens/LandingPage/LandingPage'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import Layout from './components/shared/Layout/Layout'
import MainContainer from './containers/MainContainer';

function App() {
  // console.log(React.version)
  const [currentUser, setCurrentUser] = useState(null)
  const [students, setStudents] = useState([])
  const [comments, setComments] = useState([])
  const [queryStudents, setQueryStudents] = useState(students)
  const [queryComments, setQueryComments] = useState([])
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const fetchStudents = async () => {
    const studentData = await getAllStudents()
    // console.log(studentData)
    // debugger
    setStudents(studentData)
    setQueryStudents(studentData)
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchAllComments = async () => {
    const commentData = await getAllComments()
    // console.log(studentData)
    // debugger
    setComments(commentData)
  }

  useEffect(() => {
    fetchAllComments()
  }, [])

  const fetchComments = (id) => {
    // console.log("app, 55, inside fetchcomments func, comments", comments)
    const studComments = comments.filter(comment => comment.student_id === id)
  //  console.log("app, 57", studComments)
    setQueryComments([...studComments])
    // console.log("app, 59", queryComments)
    // console.log(studComments)
  }


  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/welcome')
  }

  const handleRegister = async (formData) => {
    // console.log(formData)
    const userData = await registerUser(formData)
    // debugger
    // console.log(userData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }

  // useEffect(() => {
  //   currentUser ?
  //     // && (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register")) {
  //     history.push('/')
  //     :
  //     history.push('/')

  // }, [])

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
              // currentUser={currentUser}
            />
          </Route>
          <Route path='/'>
            {currentUser ? 
          <MainContainer
          students={students}
          queryStudents={queryStudents}
          setQueryStudents={setQueryStudents}
          setStudents={setStudents}
          comments={comments}
          setComments={setComments}
          fetchComments={fetchComments}
          queryComments={queryComments}
          fetchStudents={fetchStudents}
          fetchAllComments={fetchAllComments}
          currentUser={currentUser}
          />
          : <LandingPage />}
            </Route>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
