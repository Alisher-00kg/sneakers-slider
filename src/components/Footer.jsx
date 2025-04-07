import React from "react";
import styled from "styled-components";
import Facebook from "../assets/icons/Facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";
import VectorX from "../assets/icons/VectorX.svg";
import VectorIn from "../assets/icons/VectorIn.svg";
import VectorYoutube from "../assets/icons/VectorYouTube.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <CompanyInfo>
          <Logo>Logo</Logo>
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
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={VectorX} alt="X (Twitter)" />
            <img src={VectorIn} alt="LinkedIn" />
            <img src={VectorYoutube} alt="YouTube" />
          </SocialIcons>
        </CompanyInfo>

        <LinkGroups>
          <LinkColumn>
            <a href="#">Link one</a>
            <a href="#">Link two</a>
            <a href="#">Link three</a>
            <a href="#">Link four</a>
            <a href="#">Link five</a>
          </LinkColumn>
          <LinkColumn>
            <a href="#">Link one</a>
            <a href="#">Link two</a>
            <a href="#">Link three</a>
            <a href="#">Link four</a>
            <a href="#">Link five</a>
          </LinkColumn>
          <LinkColumn>
            <a href="#">Link six</a>
            <a href="#">Link seven</a>
            <a href="#">Link eight</a>
            <a href="#">Link nine</a>
            <a href="#">Link ten</a>
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

const Logo = styled.h1`
  font-size: 27px;
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
