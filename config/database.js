const mongoose = require("mongoose");

const coonectDatabase = async (url) =>  {
  await mongoose
    .connect(url)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};
module.exports = coonectDatabase;
