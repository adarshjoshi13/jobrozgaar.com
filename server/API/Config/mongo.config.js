const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority'
    }
  };
mongoose.connect(process.env.MONOGOKEY, mongooseOptions ).then(()=>{
    console.log(`connected to ${process.env.MONOGOKEY }`)
}).catch((err)=>{
    console.log("could not connect to the database",err);
});

module.exports = mongoose