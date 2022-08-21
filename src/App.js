import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
   const getJournalThoughts = localStorage.getItem("journalThoughts");
   const getJournalTask = localStorage.getItem("journalTask");
   const thoughtsList = getJournalThoughts ? JSON.parse(getJournalThoughts) : [];
   const taskList = getJournalTask ? JSON.parse(getJournalTask) : [];

   const [thoughts, setThoughts] = useState(thoughtsList);
   const [task, setTask] = useState(taskList);

   useEffect(() => {
      localStorage.setItem("journalThoughts", JSON.stringify(thoughts));
      localStorage.setItem("journalTask", JSON.stringify(task));
   }, [thoughts, task]);

   const addThoughts = (message, dates) => {
      const newList = [...thoughts, { message, dates, isCompleted: false }];

      const sortedThoughts = newList.sort((a, b) => {
         return new Date(a.dates) - new Date(b.dates);
      });

      setThoughts(sortedThoughts);
   };

   const addTask = (message, dates) => {
      const newList = [...task, { message, dates, isCompleted: false }];

      const sortedTask = newList.sort((a, b) => {
         return new Date(a.dates) - new Date(b.dates);
      });

      setTask(sortedTask);
   };

   const completed = (message, index) => {
      if (thoughts.every((item) => item !== message)) {
         const newTaskList = [...task];
         newTaskList[index].isCompleted = true;
         setTask(newTaskList);
      } else {
         const newThoughtList = [...thoughts];
         newThoughtList[index].isCompleted = true;
         setThoughts(newThoughtList);
      }
   };

   const remove = (message, index) => {
      if (thoughts.every((item) => item !== message)) {
         const newTaskList = [...task];
         newTaskList.splice(index, 1);
         setTask(newTaskList);
      } else {
         const newThoughtList = [...thoughts];
         newThoughtList.splice(index, 1);
         setThoughts(newThoughtList);
      }
   };

   return (
      <div className="container">
         <h1>React Coding Journal</h1>
         <div className="journal">
            <div className="thoughts-container">
               <h2>Thoughts for the Day</h2>
               <Form add={addThoughts} />
               <Display displayMessages={thoughts} completed={completed} remove={remove} />
            </div>

            <div className="task-container">
               <h2>Task for the Day</h2>
               <Form add={addTask} />
               <Display displayMessages={task} completed={completed} remove={remove} />
            </div>
         </div>
      </div>
   );
}

export default App;
