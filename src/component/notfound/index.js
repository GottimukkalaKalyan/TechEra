import {
  NotfoundMainContainer,
  NotfoundContent,
  NotfoundImage,
} from './styledcomponent'

import Navbar from '../navbar'

const NotFound = () => (
  <>
    <Navbar />
    <NotfoundMainContainer>
      <NotfoundContent>
        <NotfoundImage
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
      </NotfoundContent>
    </NotfoundMainContainer>
  </>
)

export default NotFound
