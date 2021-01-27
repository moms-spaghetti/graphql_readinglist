# GraphQL Reading List

First time using graphql, This is a small book list app which allow adding of books and authors.\
<br/>
[View Demo](https://moms-spaghetti-graphqlreadinglist.netlify.app/)\
<br/>
[Frontend Repo](https://github.com/moms-spaghetti/graphql_readinglist_frontend.git/)\
[Backend Repo](https://github.com/moms-spaghetti/graphql_readinglist_backend.git/)\
<br/>

## Details

I built this to gain an understanding of graphql implementation on front and backend using express and mongodb. I followed a tutorial at this link [youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f/) but converted the older react class functions to more modern react function components and also added an additional form with a mutation to add authors which isn't part of the tutorial series. I used the useState hook for holding form data instead of the older class states and worked through the mongodb setup from the mongodb documentation as the video utilises the mlab service which is no longer available. I also transferred all connection details to .env unlike in the tutorials where details were inputted directly into the code. Finally I utilised process.on, on the backend to close db connections when the backend was terminated. I intend to create my own application utilising graphql after this. This app also requires form validation.\
<br/>

## Built With

- HTML
- CSS
- Javascript
- GraphQL
- GraphiQL
- Apollo Boost
- Lodash
- Create react app
- React apollo
- Cors
- dotenv
- Express
- Express graphql
- Mongoose
- Nodemon
  <br/><br/>

## Getting Started

Clone both front and backend repos from the links above.
<br/><br/>

## Prerequisites

Download and install npm modules.
A mongodb database
A .env.local file in the root folder of the frontend
A .env file in the root of the backend folder
<br/><br/>

## Installation

Frontend

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/graphql_readinglist_frontend.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Create a .env file in the root of the frontend folder and add the string

   ```sh
   REACT_APP_BACKEND_URL=http://localhost:4000/graphql
   ```

4. Start the application

   ```sh
   npm start
   ```

<br/>

Backend

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/graphql_readinglist_backend.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. You will need a mongodb database and connection string for the data base. I used the free account at https://www.mongodb.com. These instructions follow creating an account here and using the free service.
4. Once you have a service for mongodb you will need a user & password with access to your database and collection you plan to use for this. You can set this up via the data storage menu > database access > add new database user.
5. You will need to create a database via data storage menu > clusters > collections > create database. You'll need the name of this collection for your database URI. Set the name to books and the collection to books. Hover over the books database and click the '+' symbol. Add another cluster called authors.
6. After you have your username + password + database name you will need to create the connection string to add to the .env file. You can get this from data storage menu > clusters > overview > connect > connect with your application > driver = node.js, version = 2.2.12 or later > copy the connection string. Exchange the highlighted details for the details from the last two steps.
7. Paste the connection string to a backend .env file in the root folder after the prefix:

   ```sh
   MONGOOSE_URL=
   PORT=4000
   ```

8. Start the application
   ```sh
   npm start
   ```
9. Once the application starts the console should display 'Connected to database'
   <br/><br/>

## Usage

Once backend and frontend are running and the database is connected you should be able to add books and authors. They will show immediately in the ui once added.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
