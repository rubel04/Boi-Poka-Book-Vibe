import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setbooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setbooks(data))
    },[])
    return (
        <div className="mt-16 mb-6">
            <h2 className="text-2xl mb-6 font-medium text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;