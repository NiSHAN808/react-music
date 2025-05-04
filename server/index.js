const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;
console.log("new req");
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
console.log(songId);
console.log("new req");
  const filePath = path.join(__dirname,'msuic', 'ikykissmeXlady.mp3');
  res.sendFile(filePath);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});