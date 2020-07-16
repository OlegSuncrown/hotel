import React, {useContext} from 'react'
import {RoomContext} from '../context'
import defaultBcg from '../images/room-1.jpeg'
//import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
function SingleRoom({match}) {
  const {getRoom}= useContext(RoomContext)
  //const [room, setRoom] = useState(getRoom(match.params.id))
  const room = getRoom(match.params.slug)
  if(!room){
    return(
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
      </div>
    )
  }
  const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
  
  const [mainImg,...defaultImg] = images

  return ( 
    <div>
      <StyledHero img={mainImg || defaultBcg}> 
        <Banner title = {`${name} room`}>
          <Link to='/rooms' className="btn-primary" >Back to Rooms</Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
        {defaultImg.map((item, index)=>{
         return <img key={index} src={item} alt={name}/>
        })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price : ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity : {
                capacity > 1 ? `${capacity} people` : `${capacity} person`
              } 
            </h6>
            <h6>
             {pets ? "pets allowed" : "no pets allowed"}
            </h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
      <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>
          })}
        </ul>
      </section>
    </div>
  )
}

export default SingleRoom
