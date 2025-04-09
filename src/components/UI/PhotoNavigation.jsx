import React from "react";
import styled from "styled-components";
import { Boots, Kids, Sneakers, WomenImg, Man } from "../../assets";
// import Boots from "../assets/image/Boots.png";
// import Kids from "../assets/image/Kids.png"
// import Men from "../assets/image/Men.png"
// import Sneakers from "../assets/image/Sneakers.png"
// import women from "../assets/image/Women.png"

export const PhotoNavigation = () => {
  return (
    <DivMain>
      <DivOne>
        <button>KIDS</button>
        {/* <img src={Kids} alt="" /> */}
      </DivOne>
      <SecondDiv>
        <DivTwo>
          <button>WOMEN</button>
          {/* <img src={WomenImg} alt="" /> */}
        </DivTwo>

        <DivThree>
          <button>SNEAKERS</button>
          {/* <img src={Sneakers} alt="" /> */}
        </DivThree>
      </SecondDiv>
      <SecondDiv>
        <DivFour>
          <button>BOOTS</button>
          {/* <img src={Boots} alt="" /> */}
        </DivFour>
        <DivFive>
          <button>MEN </button>
          {/* <img src={Man} alt="" /> */}
        </DivFive>
      </SecondDiv>
    </DivMain>
  );
};

const DivMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const SecondDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const DivOne = styled.div`
  width: 100%;
  height: 495px;
  background-image: url(${Kids});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: black;
    border: none;
    color: white;
  }
`;

const DivTwo = styled.div`
  width: 885px;
  height: 542px;
  background-image: url(${WomenImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: black;
    border: none;
    color: white;
  }
`;

const DivThree = styled.div`
  width: 669px;
  height: 542px;
  background-image: url(${Sneakers});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: black;
    border: none;
    color: white;
  }
`;

const DivFour = styled.div`
  width: 549px;
  height: 542px;
  background-image: url(${Boots});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: white;
    border: none;
    color: black;
  }
`;

const DivFive = styled.div`
  width: 985px;
  height: 542px;
  background-image: url(${Man});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;
  button {
    width: 99px;
    height: 54px;
    background-color: white;
    border: none;
    color: black;
  }
`;
