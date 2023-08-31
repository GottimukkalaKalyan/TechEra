import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Home from './component/home'
import CourseData from './component/course'
import NotFound from './component/notfound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseData} />
    <Route path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
