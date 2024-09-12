# Social Network API
Overview
Welcome to the Social Network API project! This API allows users to share their thoughts, react to friends’ thoughts, and manage friend lists. Built with MongoDB, Express.js, and Mongoose, this API provides a robust backend for a social network application.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Features
User Management: Create, update, delete users. Add or remove friends.
Thoughts: Create, update, delete thoughts. Each thought can have reactions.
Reactions: Add and remove reactions to thoughts.
Friend Lists: Manage user’s friend lists, including adding and removing friends.
Technologies
MongoDB: NoSQL database for storing user and thought data.
Express.js: Web framework for building the API routes.
Mongoose: ODM for MongoDB to manage data models and interactions.
## Installation
Install Node with:
npm install
Set Up MongoDB: Ensure MongoDB is installed and running on your local machine. You can follow the MongoDB installation guide if needed.

Start the Server:

npm start
The server will start, and the Mongoose models will sync with the MongoDB database.

Test the API: Use Insomnia or Postman to test the API routes. Make sure to test all CRUD operations for users, thoughts, and reactions.

API Routes
/api/users
GET: Retrieve all users.
GET: Retrieve a single user by _id.
POST: Create a new user.
PUT: Update a user by _id.
DELETE: Remove a user by _id.
/api/users/:userId/friends/:friendId
POST: Add a friend to a user's friend list.
DELETE: Remove a friend from a user's friend list.
/api/thoughts
GET: Retrieve all thoughts.
GET: Retrieve a single thought by _id.
POST: Create a new thought.
PUT: Update a thought by _id.
DELETE: Remove a thought by _id.
/api/thoughts/:thoughtId/reactions
POST: Add a reaction to a thought.
DELETE: Remove a reaction by reactionId.
Models
User
username: String, Unique, Required, Trimmed
email: String, Required, Unique, Valid Email
thoughts: Array of _id values referencing the Thought model
friends: Array of _id values referencing the User model
Schema Settings:

Virtual friendCount to get the length of the friends array.
Thought
thoughtText: String, Required, 1-280 characters
createdAt: Date, Default to current timestamp, Getter for formatting
username: String, Required
reactions: Array of nested documents using reactionSchema
Schema Settings:

Virtual reactionCount to get the length of the reactions array.
Reaction (Subdocument)
reactionId: Mongoose’s ObjectId, Default to new ObjectId
reactionBody: String, Required, 280 character max
username: String, Required
createdAt: Date, Default to current timestamp, Getter for formatting
Walkthrough Video


The video demonstrates the functionality of the API, including how to start the server, and test all API routes using Insomnia.
https://drive.google.com/file/d/1zamqd0CCLS6759BoULHuA1awSafahxKE/view?usp=sharing

License
This project is licensed under the MIT License. See the LICENSE file for details.