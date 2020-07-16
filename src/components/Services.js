import React, {useState} from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'
function Services() {
  const [serviceData] = useState([
    {
      icon: <FaCocktail />,
      title: 'Free Cocktails',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.'
    },  {
      icon: <FaHiking />,
      title: 'Endless Hiking',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.'
    },  {
      icon: <FaShuttleVan />,
      title: 'Free Shuttle',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.' 
    },  {
      icon: <FaBeer />,
      title: 'Strongest Beer',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod.'
    },
  ])
  return (
    <section className="services">
      <Title title="services"/>
      <div className="services-center">
        {serviceData.map((item, index) => {
          return(
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
