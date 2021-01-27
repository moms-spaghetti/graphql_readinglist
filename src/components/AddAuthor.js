import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getAuthorsQuery, addAuthorMutation } from "../queries/queries";

const initForm = {
  name: null,
  age: null,
};

const AddAuthor = (props) => {
  const [formData, setFormData] = useState(initForm);

  const submitForm = (e) => {
    e.preventDefault();
    props.addAuthorMutation({
      variables: {
        name: formData.name,
        age: Number(formData.age),
      },
      refetchQueries: [{ query: getAuthorsQuery }],
    });
    setFormData(initForm);
  };

  return (
    <form id="add-author" onSubmit={(e) => submitForm(e)}>
      <h2>Add Author</h2>

      <div className="field">
        <label>Author name:</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
      </div>

      <div className="field">
        <label>Author age:</label>
        <input
          type="number"
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          value={formData.age}
        />
      </div>

      <button id="add-author-submit">+</button>
    </form>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(AddAuthor);
