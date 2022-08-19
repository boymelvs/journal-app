import React, { useState, useEffect, useRef } from "react";

const Form = ({ addThoughtTask }) => {
   // const today = new Date().toLocaleDateString("en-GB");
   // const [todayDate, setTodayDate] = useState(today);
   const [thoughtTask, setThoughtTask] = useState("");
   const inputMessage = useRef();

   const onFormSubmit = (e) => {
      e.preventDefault();

      console.log(inputMessage.current, "inputMessage");

      addThoughtTask(thoughtTask);
   };

   return (
      <>
         <form action="" onSubmit={onFormSubmit}>
            {/* <input type="date" name="date" id="date" value={todayDate} onChange={(e) => setTodayDate(e.target.value)} max="2050-12-31" /> */}

            <input
               type="text"
               name="thoughts"
               id="thoughts"
               placeholder="What is in your mind?"
               value={thoughtTask}
               onChange={(e) => setThoughtTask(e.target.value)}
               ref={inputMessage}
            />

            <input type="submit" name="submit-btn" id="submit-btn" value="Save" />
         </form>
      </>
   );
};

export default Form;
