import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import PasswordItem from '../PasswordItem'

class PasswordSection extends Component {
  state = {
    passwordList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    showPasswords: true,
    searchInput: '',
  }

  ShowPasswordsStatus = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  onDeletePasswordItem = id => {
    const {passwordList} = this.state
    const updatedList = passwordList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordList: updatedList})
  }

  onTypingWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onTypingUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onTypingPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddingListItem = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPasswordObj = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordObj],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  filterOnSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      passwordList,
      websiteInput,
      usernameInput,
      passwordInput,
      showPasswords,
      searchInput,
    } = this.state
    const filterdList = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput),
    )

    const lenOfList = passwordList.length

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="add-pwd-img-container">
          <form onSubmit={this.onAddingListItem} className="form">
            <div className="add-pwd-container">
              <h1 className="add-pwd-title">Add New Password</h1>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  onChange={this.onTypingWebsite}
                  value={websiteInput}
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  onChange={this.onTypingUsername}
                  value={usernameInput}
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />
                </div>
                <input
                  type="password"
                  className="input"
                  onChange={this.onTypingPassword}
                  value={passwordInput}
                  placeholder="Enter Password"
                />
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="pwd-manager-img"
            alt="password manager"
          />
        </div>
        <div className="show-pwd-container">
          <div className="pwd-top-container">
            <div className="your-pwd-container">
              <h1 className="add-pwd-title">Your Passwords</h1>
              <div className="count-container">
                <p className="count">{lenOfList}</p>
              </div>
            </div>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="website"
                  className="icon"
                />
              </div>
              <input
                type="search"
                className="input"
                placeholder="search"
                onChange={this.filterOnSearch}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-label-container">
            <input
              type="checkbox"
              id="check"
              onClick={this.ShowPasswordsStatus}
            />
            <label htmlFor="check" className="show-label">
              Show Passwords
            </label>
          </div>
          {filterdList.map(eachItem => (
            <PasswordItem
              key={eachItem.id}
              passwordDetails={eachItem}
              lenOfList={lenOfList}
              onDeletePasswordItem={this.onDeletePasswordItem}
              showPasswords={showPasswords}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default PasswordSection
