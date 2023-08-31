import Loader from 'react-loader-spinner'

import './index.css'

const LoadingView = () => (
  <div className="LoaderContainer" data-testid="loader">
    <Loader type="ThreeDots" color="black" width="50px" />
  </div>
)

export default LoadingView
