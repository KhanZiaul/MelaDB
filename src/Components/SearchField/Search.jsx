import React from 'react';

const Search = () => {
    return (
        <div className='flex gap-4 justify-center mt-7'>
           <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
           <button className="btn btn-warning">Warning</button>
        </div>
    );
};

export default Search;