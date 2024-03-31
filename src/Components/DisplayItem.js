import React from 'react'

export default function DisplayItem({Item}) {
  return (
    <div className="p-3">
      <img src={Item.url} alt='eachIterable' className='h-52 rounded-md'/>
    </div>
  )
}
