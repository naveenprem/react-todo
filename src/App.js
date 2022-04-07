import Todo from "./components/Todo";

const quotes = new Array(
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "If life were predictable it would cease to be life, and be without flavor."
);

const ToDos = new Array(
  "Go for Shopping",
  "Take dog for walking",
  "Go to Church"
);

function App() {
  return (
    <>
      <h1>TODO</h1> 
     <Todo text={ToDos[0]}/>
     <Todo text={ToDos[1]}/>
     <Todo text={ToDos[2]}/>
    </>

  );
}

export default App;
