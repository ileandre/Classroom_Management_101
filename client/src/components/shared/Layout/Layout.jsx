import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import "./Layout.css"

function Layout({currentUser, children}) {
    // const {currentUser} = props
    return (
        <div className="layout">
              <Nav currentUser={currentUser}/>
              <div className="layout-children">
                  {children}
              </div>
              <Footer/>
          </div>
      )
}

export default Layout