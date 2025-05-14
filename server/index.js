 const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { type } = require('os');
const app = express();
const PORT = 5000;
const { MongoClient, ObjectId } = require("mongodb");
const uri= 'mongodb+srv://ukufirenirmal:pcM9d0X7jqY0TaRb@muisc.1cprodp.mongodb.net/';
const cluri = "mongodb+srv://ukufirenirmal:pcM9d0X7jqY0TaRbmuisc.1cprodp.mongodb.net/?retryWrites=true&w=majority&appName=Muisc";

const client = new MongoClient(uri);
async function viewData(id) {
  let data;
  try {
    await client.connect();

    const database = client.db("test");
    const collection = database.collection("users");

     data = await collection.find({_id:new ObjectId(id)}).toArray();
    
    return data;
  } catch (err) {
    console.error("Error:", err);
  } finally {
    // await client.close();
  }
return data;
}

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ Connected to MongoDB'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

// const songSchema =new mongoose.Schema({

//  name: {
//   type:String,
//   required:false,
//   },
//   cato:{
// type:String,
// required:false,
//   }
// });  const User = mongoose.model('User', songSchema);

// const user = new User({  name: 'temp',cato:'just checking' });
// user.save().then(() => console.log('User saved!'));

  let data=[{ music: "./music/ikykissmeXlady.mp3", name: "i know you wana kiss me X lady killer" },
    { music: "./music/Wham! - Last Christmas (Lyrics).mp3", name: "last crismas" },
    { music: "./music/Calvin Harris - Outside (Official Video) ft. Ellie Goulding.mp3", name: "Calvin Harris - Outside (Official Video) ft. Ellie Goulding" },
    { music: "./music/Blackbear - Hot Girl Bummer (Lyrics)", name: "Blackbear - Hot Girl Bummer " },
    { music: "./music/Bambee - Bumble Bee (Lyrics)  Spotiverse.mp3", name: " Bumble Bee 3" }
    ]
// app.use(express.json());
app.use(cors({origin :'http://localhost:5173'
}))
app.get('/api/message', (req, res) => {
  res.json(data);
  // res.sendFile(__dirname + music +"Bambee - Bumble Bee (Lyrics)  Spotiverse");
});
app.get('/api/song/:songId', (req, res) => {
  const {songId} = req.params; 

viewData(songId).then(result => {
  console.log("Actual data:", result[0].name);
  let loc=result[0].name+'.mp3'
  const filePath = path.join(__dirname,'msuic', loc);
  res.sendFile(filePath);

});






  // const filePath = path.join(__dirname,'msuic', 'ikykissmeXlady.mp3');
  // res.sendFile(filePath);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});