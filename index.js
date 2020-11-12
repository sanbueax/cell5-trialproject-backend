const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const userRoutes = require("./routes/user");
require('dotenv').config()
const mongodbCloud = process.env.DB_MONGODB

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))
mongoose.connect(mongodbCloud, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const app = express();
const port = process.env.PORT;

app.use(express.json()) 
app.use(express.urlencoded({extended: true})) 

//configure cors
// const corsOptions = {
// 	origin: 'http://localhost:3000',
// 	optionsSuccessStatus: 200
// }
app.use(cors()) 

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Listening to port ${port}`));