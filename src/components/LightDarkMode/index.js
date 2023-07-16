// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = this.getButtonText()
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-container' : 'light-container'
    const text = isDarkMode ? 'light-heading' : 'dark-heading'

    return (
      <div className="bg-container">
        <div className={`container ${modeClass}`}>
          <h1 className={`heading ${text}`}>Click To Change The Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
