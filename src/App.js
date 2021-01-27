import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

//apollo
const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <div id="form-container">
          <AddBook />
          <AddAuthor />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
