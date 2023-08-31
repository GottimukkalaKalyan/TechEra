import './index.css'

import Navbar from '../navbar'

const NotFound = () => (
  <>
    <Navbar />
    <div className="notfoundMainContainer">
      <div className="notfoundContent">
        <img
          className="notfoundImage"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    </div>
  </>
)

export default NotFound
