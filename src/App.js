import './App.css';
import {useState} from "react";
import React from "react";


function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <MoviesList/> */}
      <ColorList/>
    </div>      
  )
}

function ColorList()
{
  const [color,setColor]=useState("orange");
  const styles = {backgroundColor : color,color : "black"};


  
  const initial_colors = ["yellow","blue","red","crimson"];
  const [colors,setColors]=useState(initial_colors);
  

  return(
    <div className="main-box">
    <div>
      <input style={styles} onChange = {(event)=>setColor(event.target.value)} placeholder="Enter a color"/>
      <button onClick = {()=>setColors([...colors,color])}>Add Button</button>
      </div>
      {colors.map((clr,index)=>(<ColorBox key={index} clrname = {clr}/>))};
      {/* {colors.map((clr)=>(<ColorBox/>))} */}
    </div>
  )
}

function ColorBox({clrname})
{
  const styles = {height: "50px",width : "150px",backgroundColor : clrname, margin : "10px 10px"}
  return(
    <div style={styles} ></div>
  )
}

// function Counter()
// {
//   const [like,setLike] = useState(0);
//   const [dislike,setdisLike] = useState(0);
//   // const like = 0;
//   return(
//     <div>
//       <button  onClick={()=>setLike(like + 1)}>👍{like}</button>
//       <button  onClick={()=>setdisLike(dislike + 1)}>👎{dislike}</button>
//     </div>
//   )
// }

// function MoviesList()
// {
//   const movienames = [
//     {
//       name : "Interstellar",
//   poster : "https://tse3.mm.bing.net/th?id=OIP.whNlFWQEy6jWw2N1Wc8wHAHaLk&pid=Api&P=0&w=118&h=184",
//   ratings : 8.6,
//   summary : `As mankind's time on Earth comes to an end, a group of explorers (Matthew McConaughey, Anne Hathaway) begins the most important mission in human history: traveling beyond the galaxy to discover if there is a future for man among the stars.`
//     },
//     {
//       name : "Bahubali",
//   poster : "https://tse4.mm.bing.net/th?id=OIP.K9a3eHMDAQvc6-Cka4X0bgHaEK&pid=Api&P=0&w=346&h=194",
//   ratings : 8.3,
//   summary : `In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy.`
//     },
//     {
//       name : "My love from the star",
//   poster : "https://6.vikiplatform.com/image/3555c1be8b674894a2fbc24534e789e6.jpeg?x=b",
//   ratings : 9.6,
//   summary : `As mankind's time on Earth comes to an end, a group of explorers (Matthew McConaughey, Anne Hathaway) begins the most important mission in human history: traveling beyond the galaxy to discover if there is a future for man among the stars.`
//     },
//     {
//       name : "Coco",
//   poster : "https://tse4.mm.bing.net/th?id=OIP.QoTRWtt8zLYgb1MMq-baLgHaEK&pid=Api&P=0&w=339&h=191",
//   ratings : 9.3,
//   summary : `Accompanied by a charming trickster, a young musician embarks on an extraordinary journey through the colorful Land of the Dead to unlock the real story behind his family's history. `
//     },
//     {
//       name : "Moana",
//   poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46DTO5UY_D4pJf_SsteJkHlvz0IW3aOhuVg&usqp=CAU",
//   ratings : 9.0,
//   summary : `Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod`
//     }
//   ];
//   return(
//     <div className="movie-list">
//       {movienames.map((mv)=><Movies name={mv.name} poster={mv.poster} ratings = {mv.ratings} summary ={mv.summary} />)}
//       </div>
//   )
// }

// function Movies({name,poster,ratings,summary})
// {
//   const [show,setShow] = useState(false);
//   const styles = {display : show? "block" :"none"};
  
//   return(
//     <div className="movie-container">
//      <img className="movie-poster" src={poster} alt={name}></img>
//      <div className="movie-specs">
//      <h3>{name}</h3>
//      <p className="movie-ratings">⭐{ratings}</p>
//      </div>
//      <button onClick={()=>setShow(!show)} className="movie-show-name"> {show? "Hide" : "Show"} Description</button>
//      <p style= {styles} >{summary}</p>
//      <Counter/>
//     </div>
//   )

// }

export default App;
