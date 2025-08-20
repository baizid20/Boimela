import React from 'react';

const BookInfo = ({name,author}) => {
    console.log(name,author)
   
    return (
        <div >
            
                <h5 className='text-2xl font-bold'>{name}</h5>
            <p className='text-lg text-gray-600 '>{author}</p>
            
        </div>
    );
};

export default BookInfo;