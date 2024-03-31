import React from 'react'
import EachResult from './EachResult';

const SearchResults = ({data}) => {
    return (
        <div className='p-5 bg-fuchsia-50'>
          {data.length >=1 ? 
          (
          <div>
            <h1 className='text-4xl text-fuchsia-800 pb-4'>Your Search Results</h1>
            <div className='flex flex-wrap'>
                {data.map((image) =><EachResult image={image} key={image.id}/>)}
            </div>
          </div>
        )
        :
        (<div className="bg-fuchsia-50 h-svh flex justify-center items-center">
            <h1 className='text-fuchsia-900 text-5xl'>No Results to Show</h1>
        </div>)
        }
        
        </div>
    )
}

export default SearchResults;