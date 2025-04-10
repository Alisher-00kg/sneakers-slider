import React from "react";
import styled from "styled-components";
import { Button } from "./UI/Button";
import { Icons } from "../assets/index.js";

export const CardItem = ({ id, title, newPrice, oldPrice, image, reviews }) => {
  const functionImg = (reviews) => {
    const style = { height: "24px" };
    return reviews >= 88 ? (
      <Icons.FiveStars style={style} />
    ) : (
      <Icons.FourStars style={style} />
    );
  };

  const functionHeartSVG = () => {
    return <Icons.BlackHeart />;
  };

  return (
    <StyledInfoDiv key={id}>
      <StyledImgDiv>
        <div
          style={{
            width: "26px",
            height: "26px",
            position: "relative",
            left: "210px",
            top: "20px",
          }}
        >
          {functionHeartSVG()}
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
        <Button variant={"signin"}>Add To Carts</Button>
      </StyledImgDiv>
      <p style={{ paddingLeft: "10px" }}>{title}</p>
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
      <StyledRating>
        {functionImg(reviews)}
        <span style={{ color: "gray" }}>{reviews}</span>
      </StyledRating>
    </StyledInfoDiv>
  );
};
const StyledInfoDiv = styled.div`
  width: 250px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.5s ease;
  box-shadow: 4px 4px 10px 0px rgba(34, 60, 80, 0.2);
  h1 {
    font-size: 16px;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 9px 9px 8px 0px rgba(34, 60, 80, 0.2);
    button {
      display: block;
    }
  }
`;

const StyledPriceInfo = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 10px;
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  color: gray;
`;

const StyledImgDiv = styled.div`
  width: 250px;
  height: 220px;
  background-color: #e9e9eb;
  box-sizing: border-box;
  img {
    width: 250px;
    height: 150px;
    object-fit: cover;
  }
  button {
    width: 100%;
    height: 41px;
    display: none;
    background-color: black;
  }
`;

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 10px;

  svg {
    height: 16px;
    display: block;
  }

  span {
    font-size: 16px;
    line-height: 1;
    position: relative;
    top: 3px;
  }
`;
