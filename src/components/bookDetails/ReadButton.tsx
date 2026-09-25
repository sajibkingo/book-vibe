'use client';

import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ReadButton = ({book}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        // Logic to mark the book as read
        console.log('Book marked as read!');

        setReadBooks([...readBooks, book]);
        alert(`Book "${book.bookName}" has been marked as read!`);
    }

    return (
        <button className="btn border-none bg-emerald-600 px-8 text-white hover:bg-emerald-700" onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;