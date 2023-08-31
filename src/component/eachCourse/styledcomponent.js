import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const EachCourseContainer = styled.li`
  list-style-type: none;
  display: flex;
  margin: 10px 20px 10px 0px;
  //   border: 2px solid red;
  padding: 10px;
  width: 150px;
`

export const CourseName = styled.h1`
  font-size: 15px;
  font-weight: bold;
`

export const CourseImage = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: black;
`
