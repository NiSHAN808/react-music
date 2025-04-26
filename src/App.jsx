import React,{useState,useRef,useEffect} from "react"
let data=[{music:"./music/ikykissmeXlady.mp3",name:"i know you wana kiss me X lady killer"},
  {music:"./music/Wham! - Last Christmas (Lyrics).mp3",name:"last crismas"},
  {music:"./music/Calvin Harris - Outside (Official Video) ft. Ellie Goulding.mp3",name:"Calvin Harris - Outside (Official Video) ft. Ellie Goulding"},
  {music:"./music/Blackbear - Hot Girl Bummer (Lyrics)",name:"Blackbear - Hot Girl Bummer "},
  {music:"./music/Bambee - Bumble Bee (Lyrics)  Spotiverse.mp3",name:" Bumble Bee 3"}
]


function App() {
 const [playedMusic,setPlayedMusic]=useState(data[0].music);
 let audioRef=useRef();

useEffect(()=>{
  audioRef.current.load();
  
  audioRef.current.play();
},[playedMusic])

function handleMusicChange(index){
  setPlayedMusic(data[index].music);
  console.log(data[index].name);
}

  return (
    <>  <div className="flex">
    <div className='inline-flex flex-col justify-center items-center h-[100vh] w-[50vw] bg-pink-300  '>
      <div className="inline-flex  h-[30vw] w-[30vw] bg-red-300">
<img src="./music/p.png" height="100px" width="100px"/>
</div>
    
    <h1 className="text-[2.5vw]">{data[0].name}</h1>
    <audio controls  ref={audioRef} autoPlay className="w-[20vw]">
  <source src={playedMusic} type="audio/mp3" autoPlay/>

Your browser does not support the audio element.
</audio>
</div>
<div className="bg-blue-200 inline-flex w-[50vw] p-[2vw] ">
  <ul>
{data.map((dat,index)=> <li className="text-[2rem] text-black cursor-pointer hover:bg-red-200" 
onClick={()=>handleMusicChange(index)}>{dat.name}</li>)}
  </ul>
  </div></div>
    </>
  )
}

export default App
