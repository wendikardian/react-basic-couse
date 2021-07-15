import Todo from "./components/Todo";


//equal with function App(){}
const App = () => {
  return (
    <div> 
      <h1>To DO List</h1>
      <Todo title="Learn"/>
      <Todo title="about"/>
      <Todo title="code"/>
    </div>
  );
}

export default App;
