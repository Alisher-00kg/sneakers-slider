import React from "react";
import styled from "styled-components";

const IconButton = ({ icon, children, onClick, style, ...rest }) => {
  return (
    <div>
      <StyledButton onClick={onClick} style={style} {...rest}>
        {null ?? icon}
        {children}
      </StyledButton>
    </div>
  );
};

export default IconButton;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
