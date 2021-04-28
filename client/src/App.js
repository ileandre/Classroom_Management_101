import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import LoginPage from './screens/LoginPage/LoginPage'
import RegisterPage from './screens/RegisterPage/RegisterPage'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import Layout from './components/shared/Layout/Layout'
import MainContainer from './containers/MainContainer';

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
    history.push('/welcome')
  }

  const handleRegister = async (formData) => {
    console.log(formData)
    const userData = await registerUser(formData)
    // debugger
    console.log(userData)
    setCurrentUser(userData)
    history.push('/welcome')
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
          <Route path='/register' render={() => <RegisterPage handleRegister={handleRegister} />} />
          <Route path='/login' render={() => <LoginPage handleLogin={handleLogin} />} />
          <Route path='/' render={() => <MainContainer/>}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
