import React, { useState } from "react";
import Modal from "./Modal";

const Display = ({ displayMessages, completed, remove }) => {
   const [showModal, setShowModal] = useState({ show: "", isActive: false });

   const onDelete = (message, index) => {
      setShowModal({ message, index, show: "active show", isActive: true });
   };

   const result = displayMessages.map((message, index) => {
      const ddmmyyyy = message.dates.split("-").reverse().join("-");

      return (
         <div className="list-container" key={index}>
            <div className="date-list-container">
               <div className="date">{ddmmyyyy}</div>

               <div className="list" key={index} style={{ textDecoration: message.isCompleted && "line-through", color: message.isCompleted && "hsl(0deg, 100%, 63%)" }}>
                  {message.message}
               </div>
            </div>

            <div className="btn-container">
               <button onClick={() => completed(message, index)} className="complete-btn" title="complete">
                  &#x2714;
               </button>

               <button onClick={() => onDelete(message, index)} className="delete-btn" title="remove">
                  &#10008;
               </button>
            </div>
         </div>
      );
   });

   return (
      <>
         <div className="display ">
            <h3>Records</h3>
            {result}
         </div>
         {showModal.isActive && <Modal remove={remove} setShowModal={setShowModal} showModal={showModal} />}
      </>
   );
};

export default Display;
