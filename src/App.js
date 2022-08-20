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

   // const sortedThoughts = thoughtsList.sort((a, b) => {
   //    console.log(parseFloat(b.dates), "b.dates");
   //    return parseFloat(b.dates) - parseFloat(a.dates);
   // });

   useEffect(() => {
      localStorage.setItem("journalThoughts", JSON.stringify(thoughts));
      localStorage.setItem("journalTask", JSON.stringify(task));
   }, [thoughts, task]);

   const addThoughts = (message, dates) => {
      const newList = [...thoughts, { message, dates, isCompleted: false }];
      setThoughts(newList);
   };

   const addTask = (message, dates) => {
      const newList = [...task, { message, dates, isCompleted: false }];
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
