import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'
import NavBar from '../navbar'
import FailureView from '../failureview'
import LoadingView from '../loading'

const apiStatusList = {
  initial: 'INITIAL',
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
        apiStatus: apiStatusList.failure,
      })
    }
  }

  getSuccessView = () => {
    const {courseDetails} = this.state
    const {description, imageUrl, name} = courseDetails
    return (
      <div className="CourseName">
        <img className="CourseImage" src={imageUrl} alt={name} />
        <div className="CourseDetailsContainer">
          <h1 className="CourseNameTitle">{name}</h1>
          <p className="CourseDescription">{description}</p>
        </div>
      </div>
    )
  }

  getFailureView = () => <FailureView retryButton={this.getData} />

  getLoadingView = () => <LoadingView />

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
        <div className="EachCourseContainer">{this.getResult()}</div>
      </>
    )
  }
}

export default withRouter(CourseData)
