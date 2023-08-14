import React from "react";
import "./modal.css";
import Button from "../button"

const Modal = ({ title, visible, description, onClose }) => {
  return visible && (
    <>
      <div data-testid="modal-background" className="modal-background" onClick={onClose}></div>
      <div aria-modal={true} className="modal" >
        <h2 className="modal-title" aria-describedby={title}>{title}</h2>
        <p className="modal-description" aria-describedby={description}>{description}</p>
        <div className="modal-button">
          <Button onClick={onClose} aria-label="on Close" title="Close" />
        </div>
      </div>
    </>
  );
};

export default Modal;
