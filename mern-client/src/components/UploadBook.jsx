import React from "react";
import { useState } from "react";
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { Link } from "react-router-dom";
const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Horror",
    "Thriller",
    "Romance",
    "Westerns",
    "Dystopian",
    "Memoir",
    "Biography",
    "Autobiography",
    "Programming",
    "Bibliography",
    "Self-Help",
    "Business",
    "Cookbook",
    "Health",
    "Travel",
    "Religion",
    "Art and Music",
  ];
  const [selectedCategories, setSelectedCategories] = useState(
    bookCategories[0]
  );

  const handleBookSubmit = (e) => {
    e.preventDefault();

    const book_title = e.target.book_title.value;
    const authorname = e.target.authorname.value;
    const image_url = e.target.image_url.value;
    const category = e.target.category.value;
    const book_description = e.target.book_description.value;
    const book_pdf_url = e.target.book_pdf_url.value;

    const bookObj = {
      book_title,
      authorname,
      image_url,
      category,
      book_description,
      book_pdf_url,
    };
    console.log(bookObj);

    fetch("http://localhost:5000/upload-book",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    }
    ).then((res) => 
      res.json()).then((data) => {
      alert("Book uploaded successfully");
      form.reset();
    }); 
  }

    return (
      <div>
        <div>
        <h2 className="w-full text-center font-bold text-5xl p-10">
          Upload Book
        </h2>
      </div>

        <form onSubmit={handleBookSubmit}  className=" p-10 lg:w-[1180px]  flex-wrap gap-4">
          <div className="flex w-full justify-start gap-4">
            <div className="w-1/2 px-10">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="book_title" value="Book Title" />
                </div>
                <TextInput
                  id="book_title"
                  type="text"
                  placeholder="Book Name"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="authorname" value="Author" />
                </div>
                <TextInput
                  id="authorname"
                  type="text"
                  placeholder="Author Name"
                  required
                  shadow
                />
              </div>
            </div>
            <div className="w-1/2 px-10">
              <div className="mb-2 block">
                <Label htmlFor="image_url" value="Image URL" />
              </div>
              <TextInput
                id="image_url"
                type="text"
                placeholder="URL"
                required
                shadow
              />

              <div className="mb-2 block">
                <Label htmlFor="category" value="Category" />
              </div>
              {/* <TextInput id="category" type="text" placeholder="Category" required shadow /> */}
              <Select
                id="category"
                name="category"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedCategories}
                onChange={(e) => setSelectedCategories(e.target.value)}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="px-10">
            <div className="mb-2  block">
              <Label htmlFor="book_description" value="Book Description" />
            </div>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              id="book_description"
              type="text"
              placeholder="Description"
              required
              shadow
            />
          </div>
          <div className="px-10">
            <div className="mb-2  block">
              <Label htmlFor="book_pdf_url" value="Book PDF URL" />
            </div>
            <TextInput
              className="w-full p-2   rounded-md"
              id="book_pdf_url"
              type="text"
              placeholder="PDF URL"
              required
              shadow
            />
          </div>
          <button
            className="m-10 w-[300px] text-center flex font-bold justify-center bg-blue-600 text-white rounded-xl py-3"
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
    );
  };


export default UploadBook;
