import React from "react";

const Display = ({ displayMessage, completed, remove }) => {
   const result = displayMessage.map((message, index) => {
      return (
         <div className="list-container" key={index}>
            <div className="date-list-container">
               <div className="date">{message.dates}</div>

               <div className="list" key={index} style={{ textDecoration: message.isCompleted && "line-through", color: message.isCompleted && "red" }}>
                  {message.message}
               </div>
            </div>

            <div className="btn-container">
               <button onClick={() => completed(message, index)} className="complete-btn">
                  Complete
               </button>
               <button onClick={() => remove(message, index)} className="delete-btn">
                  X
               </button>
            </div>
         </div>
      );
   });

   return (
      <>
         <div className="display ">
            <h3>Your todo for the day</h3>
            {result}
         </div>
      </>
   );
};

export default Display;
