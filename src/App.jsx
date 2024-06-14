import Navbar from './comp/Navbar'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
   const [todo, settodo] = useState("")
   const [todos, settodos] = useState([])
const [Showfinished, setShowfinished] = useState(false)
   const handleedit = (id) => {
    const itemToEdit = todos.find(item => item.id === id)
    console.log(itemToEdit)
    settodo(itemToEdit.todo)
    let index= todos.findIndex(items =>{
      return items.id===id
     })
     let newtodos = [...todos];
     newtodos.splice(index,1);
     settodos(newtodos);
   }

   const handledelete = (e) => {
    console.log(e);
    let idx=e;
    let index= todos.findIndex(items =>{
      return items.id===idx
     })
     let newtodos = [...todos];
     newtodos.splice(index,1);
     settodos(newtodos);

   }

   const handleadd = () => {
    console.log(todo);
    if(todo.length!=0){
     settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
     settodo("")}
   }

   const handlechange = (e) => {
     settodo(e.target.value)
   }
   const handlecomplete = (e) =>{
    console.log(e.target.name);
    let idx = e.target.name
    let index= todos.findIndex(items =>{
     return items.id===idx
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted=!newtodos[index].isCompleted;
    settodos(newtodos)
   }
let tog =()=>{
   setShowfinished(!Showfinished)
}
   return (
     <>
       <Navbar />
       <div className='border  w-3/4 mx-auto rounded-xl p-5 my-1 bg-violet-200 min-h-[90vh]'>
         <div className="addtodo">
           <h1 className='stext-lg font-bold'>Add a Todo</h1>
           <input onChange={handlechange} value={todo} type="text" className='w-80 px-1' />
           <button onClick={handleadd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
         </div>
       { todos.length!==0 && <div className='m-3'> <input type="checkbox" onChange={tog} checked={Showfinished}/><span className='mx-2 stext-lg font-bold'> Not finished To-do's</span>
       </div>}
         <h1 className='text-lg font-bold'>Tasks-Todo</h1>
         {todos.length===0 && <div className='m-2 stext-lg font-bold'>No-ToDo's to display</div>}

         {todos.map(item => (
          (!Showfinished || !item.isCompleted) && <div key={item.id} className="todos ">
             <div className="todo flex justify-between w-1/2 my-3">
             <input type="checkbox" name={item.id} onClick={handlecomplete} value={item.todo}/>
               <div className={item.isCompleted ? "line-through" : ""}>
                 {item.todo}
               </div>
               <div className="buttons">
                 <button onClick={() => handleedit(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Edit</button>
                 <button onClick={() => handledelete(item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-2'>Delete</button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </>
   )
}

export default App
