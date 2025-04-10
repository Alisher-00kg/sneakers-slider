import React from "react";

import styled from "styled-components";
export const Button = ({
  children,
  onClick,
  disabled,
  variant,
  type,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
const StylesButton = (variant) => {
  switch (variant) {
    case "signin": {
      return {
        width: "408px",
        height: "50px",
        background: "#4A4C6C",
        color: "white",
        fontWeight: "400px",
        fontSize: "20px",
        lineHeight: "20px",
        letterSpacing: "0%",
        verticalAlign: " middle",
        "&:active": {
          transform: "scale(1.1)",
          backgroundColor: " rgb(3, 42, 81)",
        },
      };
    }
    case "new": {
      return {
        width: "215px",
        height: "57px",
        gap: "10px",
        borderRadius: "100px",
        border: "4px solid #7C7EA1",
        color: "white",
        fontWeight: "400px",
        fontSize: "20px",
        lineHeight: "20px",
        letterSpacing: "0%",
        background: "#4A4C6C",
        "&:hover": {
          background: " #7C7EA1",
          color: "white",
        },
        "&:active": {
          background: " #7C7EA1",
        },
      };
    }
    case "trending": {
      return {
        width: "250px",
        height: "57px",
        gap: "10px",
        borderRadius: "100px",
        border: "4px solid #9FA16D",
        color: "white",
        fontWeight: "400px",
        fontSize: "20px",
        lineHeight: "20px",
        letterSpacing: "0%",
        background: "#77794E",
        "&:hover": {
          background: " #9FA16D",
          color: "white",
        },
        "&:active": {
          background: "#9FA16D",
        },
      };
    }
  }
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  ${(props) => StylesButton(props.variant)}
`;
