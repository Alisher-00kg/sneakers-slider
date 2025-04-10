import React from "react";
import styled from "styled-components";
import { Button } from "./UI/Button";

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
        <div>
          <img src={image} alt={title} />
        </div>
        <Button variant={"signin"}>Add To Carts</Button>
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
        {}
      </StyledPriceInfo>
    </StyledInfoDiv>
  );
};
const StyledInfoDiv = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.5s ease;
  h1 {
    font-size: 16px;
  }
  &:hover {
    transform: scale(1.05);
    button {
      display: block;
      transition: 0.5s ease-in-out;
    }
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
  height: 270px;
  background-color: #e9e9eb;
  img {
    width: 200px;
    height: 130px;
    margin: 50px;
    object-fit: cover;
  }
  button {
    width: 100%;
    height: 41px;
    display: none;
    background-color: black;
  }
`;
