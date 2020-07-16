import React from 'react'

function Banner(props) {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <div></div>
      {props.children}
    </div>
  )
}

export default Banner
