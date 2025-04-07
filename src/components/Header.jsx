import React from "react";
import styled from "styled-components";
import IconButton from "./UI/IconButton";
import { Icons } from "../assets";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLeftHeader>
        <IconButton>
          <Icons.LogoHeader />
        </IconButton>
        <StyledText href="#">Women</StyledText>
        <StyledText href="#">Men</StyledText>
        <StyledText href="#">Kids</StyledText>
        <StyledText href="#">Classic</StyledText>
        <StyledText href="#">Sport</StyledText>
        <StyledText href="#">Sale</StyledText>
      </StyledLeftHeader>
      <StyledRightHeader>
        <IconButton>
          <Icons.BlackHeart />
        </IconButton>
        <IconButton>
          <Icons.Basket />
        </IconButton>
        <IconButton>
          <Icons.Avatar />
        </IconButton>
      </StyledRightHeader>
    </StyledHeader>
  );
};
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0px auto;
`;
const StyledLeftHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;
const StyledText = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 16px;
  width: 54px;
  height: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
const StyledRightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
