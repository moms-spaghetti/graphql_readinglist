import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

//components
import BookDetails from "./bookDetails";

const BookList = (props) => {
  const [selectId, setSelectedId] = useState(null);

  const displayBooks = () => {
    const data = props.data;
    if (data.loading) {
      return <div>loading books...</div>;
    } else
      return data.books.map((book) => (
        <li key={book.id} onClick={() => setSelectedId(book.id)}>
          {book.name}
        </li>
      ));
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selectId} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
