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
      };
    }
    case "new-arrivals": {
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
    case "WHAT’S TRENDING": {
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
    case "Add To Cart": {
      return {
        width: "270px",
        height: "41px",
        gap: "10px",
        color: "white",
        fontWeight: "500px",
        FontFamily: "Space Grotesk",
        lineHeight: "20px",
        letterSpacing: "0%",
        background: "#020202",
      };
    }
    case "SHOP NOW": {
      return {
        width: "140px",
        height: "45px",
        gap: "10px",
        color: "white",
        fontWeight: "700px",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "5%",
        background: "#020202",
      };
    }
    case "KIDS": {
      return {
        width: "99px",
        height: "54px",
        gap: "10px",
        color: "white",
        fontWeight: "700px",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "5%",
        background: "#020202",
      };
    }
    case "WOMEN": {
      return {
        width: "152px",
        height: "54px",
        gap: "10px",
        color: "white",
        fontWeight: "700px",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "5%",
        background: "#020202",
      };
    }
    case "SNEAKERS": {
      return {
        width: "128px",
        height: "54px",
        gap: "10px",
        color: "white",
        fontWeight: "700px",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "5%",
        background: "#020202",
      };
    }
    case "BOOTS": {
      return {
        width: "118px",
        height: "54px",
        gap: "10px",
        color: "black",
        fontWeight: "700px",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "5%",
        background: "white",
      };
    }
    case "MEN": {
      return {
        width: "40px",
        height: "54px",
        gap: "10px",
        color: "black",
        fontWeight: "700px",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "5%",
        background: "white",
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
