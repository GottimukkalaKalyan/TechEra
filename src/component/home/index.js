import {Component} from 'react'

import './index.css'

import NavBar from '../navbar'
import EachCourse from '../eachCourse'
import FailureView from '../failureview'
import LoadingView from '../loading'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {allCourses: [], apiStatus: apiStatusList.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusList.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const responseData = await response.json()
    if (response.ok) {
      const newData = responseData.courses.map(eachOne => ({
        id: eachOne.id,
        logoUrl: eachOne.logo_url,
        name: eachOne.name,
      }))
      this.setState({allCourses: newData, apiStatus: apiStatusList.success})
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  getSuccessView = () => {
    const {allCourses} = this.state
    return (
      <ul className="CoursesListContainer">
        {allCourses.map(each => (
          <EachCourse data={each} key={each.name} />
        ))}
      </ul>
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
    const {allCourses, apiStatus} = this.state
    console.log(allCourses, apiStatus)
    return (
      <div className="HomeMainContainer">
        <NavBar />
        <div className="HomeContentContainer">
          <h1>Courses</h1>
          <div className="CoursesContainer">{this.getResult()}</div>
        </div>
      </div>
    )
  }
}
export default Home
