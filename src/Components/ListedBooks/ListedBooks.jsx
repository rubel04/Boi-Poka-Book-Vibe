import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utility/addToLS";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [readList, setRedList] = useState([]);
  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();
  useEffect(() => {
    const storedBookList = getStoredReadList();
    const storedBookListStr = storedBookList.map((id) => parseInt(id));
    const books = allBooks.filter((book) =>
      storedBookListStr.includes(book.bookId)
    );
    setRedList(books);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Rating") {
      const sortedList = [...readList].sort((a, b) => b.rating - a.rating);
      setRedList(sortedList);
    }
    if (sortType === "Number Of Pages") {
      const sortedList = [...readList].sort((a, b) => b.totalPages - a.totalPages);
      setRedList(sortedList);
    }
    if (sortType === "Publisher Year") {
      const sortedList = [...readList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setRedList(sortedList);
    }
  };
  return (
    <div>
      <div className="flex justify-center cursor-pointer">
        <details className="dropdown">
          <summary className="bg-[#23BE0A] text-white py-2 px-4 rounded-lg m-1">
            {`Sort By ${sort}`}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleSort("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("Number Of Pages")}>
              <a>Number Of Pages</a>
            </li>
            <li onClick={() => handleSort("Publisher Year")}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-4">
            {readList.map((book) => (
              <div
                className="flex gap-4 border p-4 rounded-xl"
                key={book.bookId}
              >
                <div className="bg-[#F3F3F3] p-4 rounded-xl flex justify-center items-center">
                  <img className="h-40 w-28" src={book.image} alt="" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium mb-4">{book.bookName}</h2>
                  <p>by: {book.author}</p>
                  <p className="mt-2">
                    <span className="font-bold mr-4">Tags:</span>

                    {book.tags.map((tag, idx) => (
                      <button
                        className="text-[#23BE0A] bg-[#23BE0A0D] rounded-full py-1 mr-3 px-4"
                        key={idx}
                      >
                        #{tag}
                      </button>
                    ))}
                    <span>Year Of Publishing: {book.yearOfPublishing}</span>
                  </p>
                  <div className="flex gap-4 mt-2">
                    <p>Publisher: {book.publisher}</p>
                    <p>Page {book.totalPages}</p>
                  </div>
                  <div className="border border-dashed my-4 w-full"></div>
                  <div>
                    <button className="text-[#328EFF] bg-[#328EFF26] rounded-full py-1 mr-3 px-4">
                      Category: {book.category}
                    </button>
                    <button className="text-[#FFAC33] bg-[#FFAC3326] rounded-full py-1 mr-3 px-4">
                      Rating: {book.rating}
                    </button>
                    <Link
                      to={`/books/${book.bookId}`}
                      className="text-white bg-[#328EFF] rounded-full py-1 mr-3 px-4"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wish List Books here</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
