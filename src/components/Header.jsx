import React from "react";
import { Icons } from "../assets";
import styled from "styled-components";
import IconButton from "./UI/IconButton";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLeftHeader>
        <IconButton>
          <img src={Icons.LogoHeader} alt="Logo" />
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
          <img src={Icons.Heart} alt="Избранные" />
        </IconButton>
        <IconButton>
          <img src={Icons.Vector} alt="Карзина" />
        </IconButton>
        <IconButton>
          <img src={Icons.Man} alt="Лич.Кобинет" />
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
