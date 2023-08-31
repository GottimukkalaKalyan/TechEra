import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const HomeContentContainer = styled.div`
  width: 70%;
`

export const CoursesContainer = styled.div`
  height: 100%;
  //   border: 2px solid red;
`

export const FailureImage = styled.img`
  width: 400px;
`
export const FailureTitle = styled.h1`
  font-size: 25px;
  margin: 0px;
  margin-top: 20px;
`
export const FailureDescription = styled.p`
  font-size: 15px;
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
export const CoursesListContainer = styled.ul`
  padding: 0px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`
