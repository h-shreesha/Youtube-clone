import React from 'react'

const Buttons = ({names}) => {
  return (
    <div>
        <button className='px-5 py-1 m-2 bg-gray-300 rounded-lg'>{names}</button>
    </div>
  )
}

export default Buttons