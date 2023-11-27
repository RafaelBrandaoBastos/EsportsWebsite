import styled from "styled-components";

export const HeaderComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 90px;
  margin: 0;
  border: 0;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline-color: white;
  position: fixed;
  z-index: 2;
  @media (max-width: 1120px) {
    height: 80px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .hide {
    display: none;
    color: #ff255f;
  }
  .fade {
    background-color: rgba(5, 5, 5, 5);
  }
`;
export const LogoComponent = styled.img`
  height: 50px;
  width: auto;
  margin-left: 50px;
  position: relative;
  @media (max-width: 1120px) {
    left: 2%;
    margin-left: 0px;
    position: absolute;
  }
  @media (max-width: 1120px) {
    display: none;
  }
`;
export const HeaderList = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1120px) {
    display: none;
  }
`;
export const HeaderOption = styled.a`
  color: white;
  height: 100%;
  margin-left: 60px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ethnocentric Rg";
  text-decoration: none;
  .none {
    &:hover {
      text-decoration: underline;
    }
  }
  .selected {
    color: #ff255f;
    &:hover {
      text-decoration: underline #ff255f;
    }
  }
`;

export const MenuMobileComponent = styled.img`
  width: 50px;
  height: 50px;
  background-image: url(${({ icon }) => icon});
  border-radius: 10px;
  margin-left: 20px;
  @media (min-width: 1120px) {
    display: none;
  }
`;

export const LogoMobileComponent = styled.img`
  width: 40px;
  height: 40px;
  background-image: url(${({ icon }) => icon});
  border-radius: 20px;
  margin-right: 30px;
  @media (min-width: 1120px) {
    display: none;
  }
`;

export const HeaderListMobile = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 75px;
  display: flex;

  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  @media (min-width: 1120px) {
    display: none;
  }
`;

export const HeaderOptionMobile = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px 35px 0px 30px;
  font-size: 18px;
  text-align: left;
  font-family: "Ethnocentric Rg";
  text-decoration: none;
  .none {
    &:hover {
      text-decoration: underline;
    }
  }
  .selected {
    color: #ff255f;
    &:hover {
      text-decoration: underline #ff255f;
    }
  }
  @media (min-width: 1120px) {
    display: none;
  }
`;

export const Language = styled.div`
  display: flex;
  width: 145px;
  flex-wrap: wrap;
  height: 60px;
  outline-color: green;
  margin-right: 50px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1120px) {
    display: none;
  }
`;
export const LanguageMobile = styled.div`
  display: flex;
  width: 140px;
  height: 65px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 20px;
  @media (min-width: 1120px) {
    display: none;
  }
`;
export const LanguageCarousel = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  margin: 0px;
  padding: 0px;
`;

export const LanguageIcon = styled.img`
  height: 35px;
  width: auto;
  border-radius: 10px;
  position: absolute;
  left: 40px;
  z-index: 3;
  opacity: 1;
  @media (max-width: 1120px) {
    height: 30px;
  }
  &.sec {
    height: 25px;
    width: auto;
    border-radius: 10px;
    position: absolute;
    left: 0px;
    z-index: 2;
    opacity: 0.7;
    top: 5px;
    @media (max-width: 1120px) {
      height: 25px;
      top: 3px;
    }
  }
  &.thd {
    height: 25px;
    width: auto;
    border-radius: 10px;
    position: absolute;
    left: 90px;
    z-index: 1;
    opacity: 0.7;
    top: 5px;
    @media (max-width: 1120px) {
      top: 3px;
      height: 25px;
    }
  }
`;
export const LanguageText = styled.p`
  font-size: 17px;
  font-family: "Ethnocentric Rg";
  color: white;
  outline-color: red;
  margin: 0px;
  padding: 0px;
  opacity: 1;
`;
export const Arrow = styled.img`
  opacity: 1;
  width: 15px;
  height: 20px;
  margin: 0px 10px;
  z-index: 4;
  &.l {
    animation: horizontal-shakingl 1.8s infinite alternate;
    @keyframes horizontal-shakingl {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-2px);
      }
      50% {
        transform: translateX(2px);
      }
      75% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  &.r {
    animation: horizontal-shakingr 1.8s infinite alternate;
    @keyframes horizontal-shakingr {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(1.5px);
      }
      50% {
        transform: translateX(-1.5px);
      }
      75% {
        transform: translateX(1.5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;
