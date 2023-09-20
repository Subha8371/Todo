import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css';
import Header from './components/Header.js';
import ToDo from './components/Todo.js';
import TodoList from './components/TodoList';
import { useState, useEffect} from 'react';
function App() {
  const [listTodo, setlistTodo] = useState([]);
  // let [x,setX] =useState([]);
  
  //here we use useEffect because when it refresh then useEffect call for single time
  useEffect(()=>{
       if(localStorage.getItem("lists")){
        const storedData=JSON.parse(localStorage.getItem("lists"));
        setlistTodo([...storedData]);
       }
  },[])
  
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(listTodo));
  }, [listTodo]);

  let addlist = (text) => {                    
    
    if (text !== '') {
      setlistTodo([...listTodo, text]);        //add list with previous array  ...listTodo contain previous array element
      // x=localStorage.setItem("lists",JSON.stringify(listTodo))
      // setX([...x])
    }
  }
 
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];         //here copy to new array
    newListTodo.splice(key, 1)               //splice is used to delete array element from perticular index
    setlistTodo([...newListTodo]);           //set newlist to list  
    // localStorage.setItem("lists",JSON.stringify(newListTodo))
  }

  return (
    <div className="App" >
      <Header />
      <div>
        <ToDo addlist={addlist} />    {/*pass props*/}
        <hr />

        {/*we need array map function to show this list*/}
        <div className='list'>
          {listTodo.map((listitem, i) => {
            return (
              <TodoList key={i} index={i} item={listitem} deleteListItem={deleteListItem} />
            )
          })}
        </div>


      </div>
    </div>
  );
}

export default App;
