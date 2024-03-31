import React from 'react'

export default function EachResult({image}) {
  return (
    <div className="p-3 flex-wrap">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
        height={150}
        alt={image.title} className='rounded-lg'/>
        
    </div>
  )
}
