import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  AppContainer,
  ResultContainer,
  Heading,
  EditorImage,
  EditorContainer,
  OptionsContainer,
  OptionItem,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextEditContainer,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textContent: '',
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onChangeTextContent = event => {
    this.setState({textContent: event.target.value})
  }

  toggleBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {textContent, isBold, isItalic, isUnderline} = this.state

    return (
      <MainContainer>
        <AppContainer>
          <ResultContainer>
            <Heading>Text Editor</Heading>
            <EditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ResultContainer>
          <EditorContainer>
            <OptionsContainer>
              <OptionItem>
                <BoldButton
                  active={isBold}
                  onClick={this.toggleBold}
                  data-testid="bold"
                >
                  <VscBold size={18} />
                </BoldButton>
              </OptionItem>
              <OptionItem>
                <ItalicButton
                  active={isItalic}
                  onClick={this.toggleItalic}
                  data-testid="italic"
                >
                  <GoItalic size={18} />
                </ItalicButton>
              </OptionItem>
              <OptionItem>
                <UnderlineButton
                  active={isUnderline}
                  onClick={this.toggleUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={18} />
                </UnderlineButton>
              </OptionItem>
            </OptionsContainer>
            <TextEditContainer
              bold={isBold}
              italic={isItalic}
              underline={isUnderline}
              value={textContent}
              onChange={this.onChangeTextContent}
            />
          </EditorContainer>
        </AppContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
