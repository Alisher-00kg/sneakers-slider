import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";
import IconButton from "./UI/IconButton";

export const CardItem = ({
  id,
  title,
  newPrice,
  oldPrice,
  image,
  heartImg,
  heartST,
}) => {
  return (
    <StyledInfoDiv key={id}>
      <StyledImgDiv>
        <img src={image} alt={title} />
        
      </StyledImgDiv>
      <p>{title}</p>
      <StyledPriceInfo>
        <p
          style={{
            color: newPrice >= 960 ? "red" : "gray",
          }}
        >
          ${newPrice}
        </p>
        <OldPrice>{oldPrice >= 1160 ? "$1160" : ""}</OldPrice>
      </StyledPriceInfo>
    </StyledInfoDiv>
  );
};
const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  transition: 0.5s ease;
  h1 {
    font-size: 16px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledPriceInfo = styled.div`
  display: flex;
  gap: 12px;
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  color: gray;
`;

const StyledImgDiv = styled.div`
  width: 270px;
  height: 250px;
  background-color: #e9e9eb;
  img {
    width: 250px;
    height: 230px;
    object-fit: cover;
  }
`;
