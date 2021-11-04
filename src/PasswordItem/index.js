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
  console.log(lenOfList)

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
    const {passwordDetails, onDeletePasswordItem} = props
    const {id, website, username, password} = passwordDetails
    const initial = website[0].toUpperCase()
    const randomNum = Math.floor(Math.random() * 10)
    const bgColor = backgroundColors[randomNum]

    const onDelete = () => {
      onDeletePasswordItem(id)
    }

    return (
      <ul className="password-item">
        <div className="show-passwords-card">
          <div className="initial-details-container">
            <div className={`initial-container ${bgColor}`}>
              <p className="initial">{initial}</p>
            </div>
            <div className="details-container">
              <p className="renderInputs">{website}</p>
              <p className="renderInputs">{username}</p>
              <p className="renderInputs">{password}</p>
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
        </div>
      </ul>
    )
  }

  return lenOfList === 0 ? renderImage() : renderPasswordsList()
}

export default PasswordItem
