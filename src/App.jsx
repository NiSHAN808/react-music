
let data=[{music:"./music/ikykissmeXlady.mp3",name:"i know you wana kiss me X lady killer"}]


function App() {
 

  return (
    <>  
    <div className='inline-flex  h-[10rem] w-[10rem] bg-pink-300 '>
<img src="./music/p.png" height="10px" width="10px"/>

    </div>
    <h1>{data[0].name}</h1>
    <audio controls >
  <source src={data[0].music} type="audio/mp3"/>

Your browser does not support the audio element.
</audio>
    </>
  )
}

export default App
