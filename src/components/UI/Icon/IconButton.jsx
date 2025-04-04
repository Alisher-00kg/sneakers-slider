import React from "react";
import styled from "styled-components";

const IconButton = ({
  icon: Icon,
  children,
  onClick,
  style,
  variant,
  ...rest
}) => {
  return (
    <div>
      <StyledButton onClick={onClick} style={style} variant={variant} {...rest}>
        {Icon && <Icon />}
        {children}
      </StyledButton>
    </div>
  );
};

export default IconButton;

const StylesButton = (variant) => {
  switch (variant) {
    case "add": {
      return {
        width: "99px",
        height: "41px",
        background: "rgb(13, 2, 90)",
        color: "white",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "21px",
        letterSpacing: "3%",
        borderRadius: "20px",
        "&:hover": {
          background: "rgb(13, 2, 90)",
        },
        "&:active": {
          background: "rgb(13, 2, 90)",
        },
        "&:disabled": {
          background: "rgb(102, 198, 196)",
        },
      };
    }
    case "close": {
      return {
        width: "48px",
        height: "36px",
        border: "1px solid rgb(13, 2, 90)",
        background: "transparent",
        color: "rgb(13, 2, 90)",
        fontSize: "16px",
        lineHeight: "24px",
        borderRadius: "8px",
        "&:hover": {
          background: "rgb(13, 2, 90)",
          color: "white",
          "& path": {
            stroke: "#fff",
          },
        },
        "&:active": {
          background: "rgb(13, 2, 90)",
        },
        "&:disabled": {
          border: "1px solid rgb(102, 198, 196)",
          color: "#0bd1d1",
          background: "transparent",
        },
      };
    }
  }
};
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: #031d7d;
  color: white;
  ${(props) => StylesButton(props.variant)}
`;
