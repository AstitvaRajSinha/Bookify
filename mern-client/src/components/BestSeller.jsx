import React, { useEffect, useState } from 'react';
import BookCards from './BookCards';

const BestSeller = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/all-books')
            .then(res => res.json())
            .then(data => setBooks(data.slice(0, 4))); // Slice to get only the first 4 elements
    }, []); // Empty dependency array to run only once when component mounts
    
    return (
        <div>
            <BookCards books={books} headline={"Best Seller"} />  
        </div>
    );
}

export default BestSeller;
