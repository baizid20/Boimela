import React from 'react';
import BookInfo from './BookInfo';
import FavStar from './favStar';

const BookRow = ({book}) => {
    console.log(book)
    return (
        <div className='flex justify-between items-center '>
            <BookInfo name={book.name} author={book.author}></BookInfo>
            <FavStar></FavStar>
        </div>
    );
};

export default BookRow;