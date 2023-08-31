import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import {
  EachCourseContainer,
  CourseName,
  FailureImage,
  FailureTitle,
  FailureDescription,
  RetryButton,
  LoaderContainer,
  CourseImage,
  CourseDetailsContainer,
  CourseDescription,
  CourseNameTitle,
} from './styledcomponent'

import NavBar from '../navbar'

const apiStatusList = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class CourseData extends Component {
  state = {courseDetails: [], apiStatus: apiStatusList.inProgress}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const responseData = await response.json()
    console.log(responseData)
    if (response.ok) {
      const newData = {
        id: responseData.course_details.id,
        description: responseData.course_details.description,
        imageUrl: responseData.course_details.image_url,
        name: responseData.course_details.name,
      }
      this.setState({
        courseDetails: newData,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusList.success,
      })
    }
  }

  getSuccessView = () => {
    const {courseDetails} = this.state
    const {description, imageUrl, name} = courseDetails
    return (
      <CourseName>
        <CourseImage src={imageUrl} alt={name} />
        <CourseDetailsContainer>
          <CourseNameTitle>{name}</CourseNameTitle>
          <CourseDescription>{description}</CourseDescription>
        </CourseDetailsContainer>
      </CourseName>
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
    return (
      <>
        <NavBar />
        <EachCourseContainer>{this.getResult()}</EachCourseContainer>
      </>
    )
  }
}

export default withRouter(CourseData)
