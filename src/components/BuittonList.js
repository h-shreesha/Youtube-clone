import React from 'react'
import Buttons from './Buttons'

const  btns = ['All', 'Gamings', 'Songs', 'Live', 'Cricket', 'Football', 'Technology', 'Science', 'Soccer', 'Javascript','React','Node', 'Typescript']
const BuittonList = () => {
  return (
    <div className='flex'>
      {btns.map((ele,index) => {
        return (
          <Buttons key={index}  names = {ele}/>
        )
      })}
    </div>
  )
}

export default BuittonList