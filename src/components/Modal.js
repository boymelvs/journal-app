import React from "react";

const Modal = ({ remove, message, index, setShowModal, showModal, setIsActive }) => {
   const closeModal = () => {
      setShowModal("");
      setIsActive(false);
   };

   const onConfirmDelete = (message, index) => {
      remove(message, index);
      closeModal();
   };

   return (
      <div id="modal-container" className={showModal}>
         <div className="modal">
            <h2 className="question">Remove the record?</h2>
            <div className="confirmation-btn">
               <button onClick={() => onConfirmDelete(message, index)} className="confirm">
                  Ok
               </button>

               <button onClick={() => closeModal()} className="cancel">
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
};

export default Modal;
