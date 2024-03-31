import React from 'react'

const SearchResults = ({data}) => {
    return (
        <>
          {data.length >=1 ? (<div className="bg-fuchsia-50">
            {data.map((image) =><div key={image.id}>
            <div className="p-5 flex-wrap">
                <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
            alt={image.title}/>
            </div>
            </div>)}
        </div>)
        :
        (<div className="bg-fuchsia-50 h-svh flex justify-center items-center">
            <h1 className='text-fuchsia-900 text-5xl'>No Results to Show</h1>
        </div>)
        }
        
        </>
    )
}

export default SearchResults;