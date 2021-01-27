import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const initFormData = {
  name: "",
  genre: "",
  authorId: "",
};

const AddBook = (props) => {
  const [formData, setFormData] = useState(initFormData);

  const displayAuthors = () => {
    const data = props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>loading authors...</option>;
    } else
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addBookMutation({
      variables: {
        name: formData.name,
        genre: formData.genre,
        authorId: formData.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
    setFormData(initFormData);
  };

  return (
    <form id="add-book" onSubmit={(e) => submitForm(e)}>
      <h2>Add a book</h2>
      <div className="field">
        <label>Book name: </label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
      </div>

      <div className="field">
        <label>Genre: </label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          value={formData.genre}
        />
      </div>

      <div className="field">
        <label>Author: </label>
        <select
          onChange={(e) =>
            setFormData({ ...formData, authorId: e.target.value })
          }
          value={formData.authorId}
        >
          {displayAuthors()}
        </select>
      </div>

      <button id="book-submit" type="submit">
        +
      </button>
    </form>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
