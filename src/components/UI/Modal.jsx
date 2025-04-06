import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <BackDrop>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </BackDrop>
  );
};

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 100px;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export default Modal;
