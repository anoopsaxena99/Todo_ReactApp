import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/footer";
import { Todos } from "./MyComponents/todos";

function App() {
  // let a=5
  return (
    <>
      <Header title="Todo Lists" search={false} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
