import './index.css'
import {Link} from 'react-router-dom'

const EachCourse = props => {
  const {data} = props
  const {id, logoUrl, name} = data
  return (
    <Link className="linkTag" to={`/courses/${id}`}>
      <li className="eachCourseContainer">
        <img className="courseImage" src={logoUrl} alt={name} />
        <p className="courseName">{name}</p>
      </li>
    </Link>
  )
}

export default EachCourse
