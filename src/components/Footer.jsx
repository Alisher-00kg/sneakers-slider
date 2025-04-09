import React from "react";
import styled from "styled-components";

import { Icons } from "../assets";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <CompanyInfo>
          <StyledFooterLogo />
          <Address>
            <h4>Address:</h4>
            <p>USA, California</p>
          </Address>
          <Contact>
            <h4>Contact:</h4>
            <a href="#">1800 123 4567</a>
            <a href="#">javaria.y2b@gmail.com</a>
          </Contact>
          <SocialIcons>
            <Icons.FacebookSvg />
            <Icons.InstagramSvg />
            <Icons.XtwitterSvg />
            <Icons.LinkedinSvg />.
            <Icons.YouTubeSvg />
          </SocialIcons>
        </CompanyInfo>

        <LinkGroups>
          
          <LinkColumn>
            <a href="#">Paзработчики:</a>
            <a href="#">Нуриза</a>
            <a href="#">Куба</a>
            <a href="#">Арген</a>
            <a href="#">Данияр</a>
          </LinkColumn>
          <LinkColumn>
            <a href="#">Сымбат</a>
            <a href="#">Нурбол</a>
            <a href="#">Наталья</a>
            <a href="#"> U.S.A.</a>
            <a href="#">California</a>
          </LinkColumn>
        </LinkGroups>
      </FooterContent>

      <Divider />
      <Copyright>© 2023 Javaria. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 58px 144px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1281px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 400px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    color: white;
    text-decoration: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const LinkGroups = styled.div`
  display: flex;
  gap: 69px;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

const Copyright = styled.h4`
  font-weight: 400;
  font-size: 15px;
`;


const StyledFooterLogo = styled(Icons.LogoHeader)`
  stroke: #fff;
  path {
    fill: #fff;
  }
`;
