import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </div>
  );
};

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 100px;
  position: relative;
`;

export default Modal;
