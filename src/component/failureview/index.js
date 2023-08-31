import './index.css'

const FailureView = props => {
  const {retryButton} = props

  const onClickRetry = () => {
    retryButton()
  }
  return (
    <div className="LoaderContainer">
      <img
        className="FailureImage"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="FailureTitle">Oops! Something Went Wrong</h1>
      <p className="FailureDescription">
        We cannot seem to find the page you are looking for
      </p>
      <button className="RetryButton" type="button" onClick={onClickRetry}>
        Retry
      </button>
    </div>
  )
}

export default FailureView
