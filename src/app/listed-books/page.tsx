import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedBookPage = () => {
    const {readBooks, setReadBooks} = useContext(BooksContext);
    return (
        <div>
            Listed books
        </div>
    );
};

export default ListedBookPage;