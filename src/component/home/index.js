import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  HomeMainContainer,
  HomeContentContainer,
  CoursesContainer,
  LoaderContainer,
  FailureImage,
  FailureTitle,
  FailureDescription,
  RetryButton,
  CoursesListContainer,
} from './styledcomponent'

import NavBar from '../navbar'
import EachCourse from '../eachCourse'

const apiStatusList = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {allCourses: [], apiStatus: apiStatusList.inProgress}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const responseData = await response.json()
    console.log(responseData)
    if (response.ok) {
      const newData = responseData.courses.map(eachOne => ({
        id: eachOne.id,
        logoUrl: eachOne.logo_url,
        name: eachOne.name,
      }))
      this.setState({allCourses: newData, apiStatus: apiStatusList.success})
    } else {
      this.state({apiStatus: apiStatusList.failure})
    }
  }

  getSuccessView = () => {
    const {allCourses} = this.state
    return (
      <CoursesListContainer>
        {allCourses.map(each => (
          <EachCourse data={each} key={each.id} />
        ))}
      </CoursesListContainer>
    )
  }

  getFailureView = () => (
    <LoaderContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureTitle>Oops! Something Went Wrong</FailureTitle>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.getData}>
        Retry
      </RetryButton>
    </LoaderContainer>
  )

  getLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="black" width="50px" />
    </LoaderContainer>
  )

  getResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.success:
        return this.getSuccessView()
      case apiStatusList.failure:
        return this.getFailureView()
      case apiStatusList.inProgress:
        return this.getLoadingView()
      default:
        return null
    }
  }

  render() {
    const {allCourses, apiStatus} = this.state
    console.log(allCourses, apiStatus)
    return (
      <HomeMainContainer>
        <NavBar />
        <HomeContentContainer>
          <h1>Courses</h1>
          <CoursesContainer>{this.getResult()}</CoursesContainer>
        </HomeContentContainer>
      </HomeMainContainer>
    )
  }
}
export default Home
