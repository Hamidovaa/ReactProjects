import React from 'react'

const HeroSlider = (props) => {
  return (
    <div>
        <h1>Xos geldiniz men {props.name}</h1>
        <img width={300} src={props.image} alt="" />
    </div>
  )
}

export default HeroSlider