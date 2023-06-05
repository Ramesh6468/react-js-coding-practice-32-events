// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {RegistrationDetails} = props

  const getRegistrationsClosedView = () => (
    <div className="closedContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image3"
      />
      <h1 className="heading2">Registrations Are Closed Now!</h1>
      <p className="details">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const getRegisteredView = () => (
    <div className="successContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image4"
      />
      <h1 className="heading2">You have already registered for the event</h1>
    </div>
  )

  const getYetToRegisterView = () => (
    <div className="yetContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image5"
      />
      <p className="details">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const getNoActiveEventView = () => (
    <p className="heading3">
      Click on an event, to view its registration details
    </p>
  )

  const getEventRegistrationDetails = () => {
    switch (RegistrationDetails) {
      case registrationStatus.yetToRegister:
        return getYetToRegisterView()
      case registrationStatus.registered:
        return getRegisteredView()
      case registrationStatus.registrationsClosed:
        return getRegistrationsClosedView()
      default:
        return getNoActiveEventView()
    }
  }

  return <div className="resultContainer">{getEventRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
