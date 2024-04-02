import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`

export const AppContainer = styled.div`
  margin-top: 46px;
  display: flex;
  width: 90%;
  max-width: 550px;
  min-height: 600px;
  background-color: #1b1c22;
  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`

export const ResultContainer = styled.div`
  text-align: center;
  max-width: 400px;
`

export const Heading = styled.h1`
  color: #f8fafc;
`

export const EditorImage = styled.img`
  width: 75%;
  max-width: 300px
  height: auto;
`

export const EditorContainer = styled.div`
  width: 100%;
  background-color: #25262c;
  border: 1px solid #334155;
  display: flex;
  flex-direction: column;
`

export const OptionsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 45px;
  display: flex;
  align-items: center;
`

export const OptionItem = styled.li`
  display: inline;
  margin-right: 10px;
`

export const TextEditContainer = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
  font-style: ${({italic}) => (italic ? 'italic' : 'normal')};
  text-decoration: ${({underline}) => (underline ? 'underline' : 'none')};
  height: 80%;
  resize: none;
  background-color: transparent;
  border: 1px solid #334155;
  outline: none;
  color: #f1f5f9;
  flex-grow: 1;
`

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({active}) => (active ? '#faff00' : '#f1f5f9')};
  padding: 5px 10px;
  cursor: pointer;
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({active}) => (active ? '#faff00' : '#f1f5f9')};
  padding: 5px 10px;
  cursor: pointer;
  // font-style: ${({active}) => (active ? 'italic' : 'normal')};
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({active}) => (active ? '#faff00' : '#f1f5f9')};
  padding: 5px 10px;
  cursor: pointer;
  // text-decoration: ${({active}) => (active ? 'underline' : 'none')};
`
