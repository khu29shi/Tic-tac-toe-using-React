import React from 'react'
import Icons from '../Icons/Icons'
import "./Card.css"

const Card = ({ player }) => {
    let icons = <Icons/>
    if(player === 'X')
        icons = <Icons name="cross"/>
        else if(player === 'O')
            icons = <Icons name="circle"/>
  return (
    <div className='card-wrapper'>
      {icons}
    </div>
  )
}

export default Card
