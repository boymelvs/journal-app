import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
   const todo = [
      { text: "Learn about React", isCompleted: false },
      { text: "Meet friend for lunch", isCompleted: false },
      { text: "Build really cool to app", isCompleted: false },
   ];

   const [thoughts, setThought] = useState(todo);
   const [task, setTask] = useState(todo);

   const addThoughtTask = (text) => {
      const newTodos = [...thoughts, { text }];
      setThought(newTodos);
   };

   return (
      <div className="container">
         <h1>React Coding Journal</h1>
         <div className="journal">
            <div className="thoughts-container">
               <h2>Thoughts for the Day</h2>
               <Form addThoughtTask={addThoughtTask} />
               <Display thoughts={thoughts} />
            </div>

            {/* <div className="task-container">
               <h2>Task for the Day</h2>
               <Form addThoughtTask={addThoughtTask} />
               <Display task={task} />
            </div> */}
         </div>
      </div>
   );
}

export default App;
