import './index.css'

const backgroundColors = [
  'red',
  'yellow',
  'blue',
  'green',
  'orange',
  'purple',
  'brown',
  'grey',
  'goldenrod',
  'pink',
]

const PasswordItem = props => {
  const {lenOfList} = props

  console.log('length:', lenOfList)
  const renderImage = () => (
    <div className="bottom-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="no-pwd-image"
        alt="no passwords"
      />
      <p className="no-passwords">No Passwords</p>
    </div>
  )

  const renderPasswordsList = () => {
    const {passwordDetails, onDeletePasswordItem, showPasswords} = props
    const {id, website, username, password} = passwordDetails
    const initial = website[0].toUpperCase()
    const maskedPwd =
      'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
    const randomNum = Math.floor(Math.random() * 10)
    const bgColor = backgroundColors[randomNum]

    const renderPassword = () => {
      if (showPasswords) {
        return <img src={maskedPwd} className="masked-pwd" alt="stars" />
      }
      return <p className="renderInputs">{password}</p>
    }

    const onDelete = () => {
      onDeletePasswordItem(id)
    }

    return (
      <li className="show-passwords-card">
        <div className="initial-details-container">
          <div className={`initial-container ${bgColor}`}>
            <p className="initial">{initial}</p>
          </div>
          <div className="details-container">
            <p className="renderInputs">{website}</p>
            <p className="renderInputs">{username}</p>
            {renderPassword()}
          </div>
        </div>
        <button
          className="delete"
          type="button"
          testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </li>
    )
  }

  return lenOfList > 0 ? renderPasswordsList() : renderImage()
}
export default PasswordItem
