import {
  EachCourseContainer,
  CourseImage,
  CourseName,
  LinkTag,
} from './styledcomponent'

const EachCourse = props => {
  const {data} = props
  const {id, logoUrl, name} = data
  return (
    <>
      <LinkTag to={`/courses/${id}`}>
        <EachCourseContainer>
          <CourseImage src={logoUrl} alt={name} />
          <CourseName>{name}</CourseName>
        </EachCourseContainer>
      </LinkTag>
    </>
  )
}

export default EachCourse
