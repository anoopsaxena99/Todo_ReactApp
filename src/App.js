import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/footer";
import { Todos } from "./MyComponents/todos";
import { AddTodo } from "./MyComponents/addTodo";
import { useState } from "react";

function App() {
  // let a=5

  const ondelete = (todo) => {
    console.log("I am On Delete !! ", todo);
    //this delete method not work
    // let index = data.indexOf(todo);
    // data.splice(index, 1);
    setdata(
      data.filter((e) => {
        return e != todo;
      })
    );
  };
  const [data, setdata] = useState([
    {
      sno: 1,
      note: "do your react js",
      date: "28/03/2022",
    },
    {
      sno: 2,
      note: "do your mongoDB",
      date: "02/04/2022",
    },
    {
      sno: 3,
      note: "do your NodeJs",
      date: "04/04/2022",
    },
  ]);
  const addtodo = (todo) => {
    console.log("I am adding this todo !! ", todo);
  };
  return (
    <>
      <Header />
      <AddTodo />
      <Todos todo={data} ondelete={ondelete} />
      <Footer />
    </>
  );
}

export default App;
