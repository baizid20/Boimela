import React from 'react';
import BookRow from './BooklistComponents/BookRow';
import { use } from 'react';

const Booklist = ({bookDataPromise}) => {
    const BookData = use(bookDataPromise)
    
    return (
        <div className='grid gap-5 my-4'>
            {
                BookData.map(book => <BookRow key={book.id} book={book}></BookRow>)
            }

            </div>
            
            
       
    );
};

export default Booklist;