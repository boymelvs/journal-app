import React from "react";

const Modal = ({ remove, setShowModal, showModal }) => {
   const closeModal = () => {
      setShowModal({ show: "", isActive: false });
   };

   const onConfirmDelete = (showModal) => {
      remove(showModal.message, showModal.index);
      closeModal(showModal);
   };

   return (
      <div id="modal-container" className={showModal.show}>
         <div className="modal">
            <h2 className="question">Remove the record?</h2>
            <div className="confirmation-btn">
               <button onClick={() => onConfirmDelete(showModal)} className="confirm">
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
