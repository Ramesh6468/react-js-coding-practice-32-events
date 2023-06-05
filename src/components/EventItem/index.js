// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'image1' : 'image2'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="item">
      <button type="button" className="button2" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
