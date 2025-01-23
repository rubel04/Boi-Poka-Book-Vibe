import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList } from "../../Utility/addToLS";

const Bookdetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId === parseInt(bookId));
  const {
    bookId : id,
    bookName,
    author,
    image,
    totalPages,
    review,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;


  const handleReadBtn = (id) => {
      alert('Book Read Added')
    addToReadList(id)
  }

  return (
    <div className="flex w-full gap-6 mb-8">
      <div className="bg-[#F3F3F3] flex justify-center items-center rounded-xl w-1/2">
        <img className="h-[500px]" src={image} alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-medium mb-4">{bookName}</h2>
        <p>by: {author}</p>
        <div className="border border-dashed my-4"></div>
        <p>{category}</p>
        <div className="border border-dashed my-4"></div>
        <p>
          <span className="font-bold">Review:</span> {review}
        </p>
        <p className="mt-2">
          <span className="font-bold mr-4">Tags:</span>

          {tags.map((tag, idx) => (
            <button
              className="text-[#23BE0A] bg-[#23BE0A0D] rounded-full py-1 mr-3 px-4"
              key={idx}
            >
              #{tag}
            </button>
          ))}
        </p>
        <div className="border border-dashed my-4"></div>
        <div className="flex justy gap-10 mb-6">
        <div className="space-y-2">
          <p>Number Of Pages: </p>
          <p>Publisher: </p>
          <p>Year of Publishing: </p>
          <p>Rating: </p>
        </div>
        <div className="space-y-2">
          <p>{totalPages}</p>
          <p>{publisher}</p>
          <p>{yearOfPublishing}</p>
          <p>{rating}</p>
        </div>
        </div>
        <button onClick={() => handleReadBtn(id)} className="border-2 border-gray-300 mr-4 py-2 px-4 rounded-lg">Read</button>
        <button className="bg-[#59C6D2] text-white py-2 px-4 rounded-lg">Wish List</button>
      </div>
    </div>
  );
};

export default Bookdetails;
