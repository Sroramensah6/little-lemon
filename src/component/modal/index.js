import React from "react";
import "./modal.css";
import Button from "../button"

const Modal = ({ title, visible, description, onClose }) => {
  return visible && (
    <>
      <div data-testid="modal-background" className="modal-background" onClick={onClose}></div>
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </>
  );
};

export default Modal;
