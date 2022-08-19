import React from "react";

const Display = ({ thoughts }) => {
   const result = thoughts.map((message, index) => {
      return (
         <div className="list-container" key={index}>
            <div className="date-list-container">
               <div className="date">19-Aug-2022</div>

               <div className="list" key={index}>
                  {message.text}
               </div>
            </div>

            <div className="btn-container">
               <button className="complete-btn">Complete</button>
               <button className="delete-btn">X</button>
            </div>
         </div>
      );
   });

   return (
      <>
         <div className="display ">
            <h3>Your thoughts for the day</h3>
            {result}
         </div>
      </>
   );
};

export default Display;
