import React from 'react';
import BoimelaHeading from './BoimelaHeading.jsx'
import SearchBox from './SearchBox.jsx';
import Booklist from './Booklist.jsx';



const bookDataPromise = fetch('/public/book.Data.json').then(res => res.json())
console.log(bookDataPromise)



const BoimelaContainer = () => {
    return (
        <div className='grid gap-5 border-2 w-3/4 mx-auto p-5 my-20 px-4'>
            <BoimelaHeading></BoimelaHeading>
            <SearchBox></SearchBox>
            <Booklist  bookDataPromise={bookDataPromise}></Booklist>
        </div>
    );
};

export default BoimelaContainer;