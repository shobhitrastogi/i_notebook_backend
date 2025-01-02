const mongoose = require('mongoose');
const mongoUri = "mongodb+srv://ironman:ironman@cluster0.e9zvc5m.mongodb.net/inotebook"; 

const connectToMongo = () => {
  mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectToMongo;
