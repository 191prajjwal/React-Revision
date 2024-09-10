import "./App.css";
import Arrays from "./components/Arrays";
import Header from "./components/Header";
import Info from "./components/Info";
import Table from "./components/Table";
function App() {
  // let name="prajjwal"
  let arr = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
  ];

  let arr1 = [
    [1, 2, 3, 4],
    ["a", "b", "c", "d"],
    ["ejs", "hbs", "pug", "moustache"],
    ["ruby", "pearl", "scala", "rust"],
  ];

  let obj = [
    { name: "prajjwal", age: "24", city: "Newyork" },
    { name: "raj", age: "38", city: "Paris" },
    { name: "takashi", age: "90", city: "LA" },
    { name: "rajik", age: "98", city: "Mumbai" },
  ];
  return (
    <div className="App">
      <h1>I am APP</h1>
      <hr color="red" />

      <Table data={obj}/>
      


      {/* <Arrays title={"Skills"} skills={arr} multi={arr1} /> */}
      {/* <Header name={name} age={age}/> */}
      {/* <Info name={name} age={age}/> */}
      {/* <Info/> this time i gave no prop so it will show nothing in place of props */}
      <hr color="red" />


     
    </div>
  );
}
let age = 24;
export default App;
