import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
   const thoughtsList = [
      { message: "Learn about React", dates: "2022-08-19", isCompleted: false },
      { message: "Meet friend for lunch", dates: "2022-08-19", isCompleted: false },
      { message: "Build really cool to app", dates: "2022-08-19", isCompleted: false },
   ];

   const taskList = [
      { message: "Learn aboutaboutabout about about React", dates: "2022-08-19", isCompleted: false },
      { message: "Meet aboutaboutab outaboutfriend for lunch", dates: "2022-08-19", isCompleted: false },
      { message: "Build aboutaboutab outaboutreally cool to app", dates: "2022-08-19", isCompleted: false },
   ];

   const [thoughts, setThoughts] = useState(thoughtsList);
   const [task, setTask] = useState(taskList);

   const addThoughts = (message, dates) => {
      const newList = [...thoughts, { message, dates }];
      setThoughts(newList);
   };

   const addTask = (message, dates) => {
      const newList = [...task, { message, dates }];
      setTask(newList);
   };

   const completed = (message, index) => {
      if (thoughts.every((item) => item !== message)) {
         const newList = [...task];
         newList[index].isCompleted = true;
         setTask(newList);
      } else {
         const newList = [...thoughts];
         newList[index].isCompleted = true;
         setThoughts(newList);
      }
   };

   const remove = (message, index) => {
      if (thoughts.every((item) => item !== message)) {
         const newList = [...task];
         newList.splice(index, 1);
         setTask(newList);
      } else {
         const newList = [...thoughts];
         newList.splice(index, 1);
         setThoughts(newList);
      }
   };

   return (
      <div className="container">
         <h1>React Coding Journal</h1>
         <div className="journal">
            <div className="thoughts-container">
               <h2>Thoughts for the Day</h2>
               <Form add={addThoughts} />
               <Display displayMessage={thoughts} completed={completed} remove={remove} />
            </div>

            <div className="task-container">
               <h2>Task for the Day</h2>
               <Form add={addTask} />
               <Display displayMessage={task} completed={completed} remove={remove} />
            </div>
         </div>
      </div>
   );
}

export default App;
