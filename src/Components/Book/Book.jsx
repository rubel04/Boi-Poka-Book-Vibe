import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, bookName,author,image,totalPages,rating,category,tags}= book;
    return (
        <Link to={`books/${bookId}`}>
        <div className="border-2 border-[#F3F3F3] rounded-xl p-4">
            <div className="bg-[#F3F3F3] p-8 rounded-xl flex justify-center">
                <img className="h-40" src={image} alt="" />
            </div>
            <div className="flex gap-6 mt-5">
                {
                    tags.map((tag, idx) => <button className="text-[#23BE0A] bg-[#23BE0A0D] rounded-full py-1 px-4" key={idx}>{tag}</button>)
                }
            </div>
            <h2 className="text-3xl font-medium my-4">{bookName}</h2>
            <p>by: {author}</p>
            <div className="border border-dashed my-4"></div>
            <div className="flex justify-between">
                <p>{category}</p>
                <div className="rating flex items-center gap-2">
                    <p>{rating}</p>
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-gray-500" />
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;