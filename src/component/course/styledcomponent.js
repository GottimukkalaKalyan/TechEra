import styled from 'styled-components'

export const EachCourseContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 30px;
`

export const CourseName = styled.div`
  width: 80%;
  //   border: 2px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  border-radius: 10px;
  box-shadow: 1px 1px 20px 2px;
`

export const CourseImage = styled.img`
  width: 250px;
  height: 100%;
  margin-right: 10px;
`
export const CourseDetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
`
export const FailureImage = styled.img`
  width: 400px;
`
export const FailureTitle = styled.h1`
  font-size: 25px;
  margin: 0px;
  margin-top: 20px;
`
export const CourseNameTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`
export const FailureDescription = styled.p`
  font-size: 15px;
`
export const CourseDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #475569;
`
export const RetryButton = styled.button`
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  font-weight: bold;
  color: white;
  background-color: #4656a1;
  border: none;
  outline: none;
  border-radius: 4px;
`
export const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
