const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const doesExist = (username)=>{
  let userswithsamename = users.filter((user)=>{
    return user.username === username
  });
  if(userswithsamename.length > 0){
    return true;
  } else {
    return false;
  }
}

public_users.post("/register", (req,res) => {
  const {username, password} = req.body;

  if (username && password) {
    if (!doesExist(username)) {
      users.push({username, password});
      return res.status(200).json({message: "User successfully registered. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});
    }
  }
  return res.status(404).json({message: "Unable to register user."});
});

public_users.get('/', function (req, res) {
  return res.json(JSON.stringify(books));
});

public_users.get('/isbn/:isbn', function (req, res) {
  const book = books[req.params.isbn];
  if(book){
    return res.json(book);
  }
  else{
    return res.status(404).json({message: "Book not found"});
  }
});

public_users.get('/author/:author', function (req, res) {
  const authorBooks = Object.values(books).filter(book => book.author === req.params.author);
  return res.json(authorBooks);
});

public_users.get('/title/:title',function (req, res) {
  const titleBooks = Object.values(books).filter(book => book.title === req.params.title);
  return res.json(titleBooks);
});

public_users.get('/review/:isbn',function (req, res) {
  const book = books[req.params.isbn];
  if(book){
    return res.json(book.reviews);
  }
  else{
    return res.status(404).json({message: "Book not found"});
  }
});

public_users.delete('/users/:username', function (req, res) {
  const username = req.params.username;

  // Logic to remove the user from the users array or your data source
  // For example:
  const userIndex = users.findIndex(user => user.username === username);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return res.status(200).json({ message: "User successfully deleted." });
  } else {
    return res.status(404).json({ message: "User not found." });
  }
});

module.exports.general = public_users;

public_users.post('/review/:isbn', function (req, res) {
  const book = books[req.params.isbn];
  const review = req.body.review;

  if(book){
    let newReviewId = Object.keys(book.reviews).length + 1;
    book.reviews[newReviewId] = review;
    return res.status(200).json({message: "Review successfully added"});
  }
  else{
    return res.status(404).json({message: "Book not found"});
  }
});

public_users.delete('/review/:isbn/:reviewId', function (req, res) {
  const book = books[req.params.isbn];
  const reviewId = req.params.reviewId;

  if(book && book.reviews[reviewId]){
    delete book.reviews[reviewId];
    return res.status(200).json({message: "Review successfully deleted"});
  }
  else{
    return res.status(404).json({message: "Book or review not found"});
  }
});
