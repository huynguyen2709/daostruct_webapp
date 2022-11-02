import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/nasa-logo.png";

const Header = () => {
  return (
    <Container>
      <LeftContent>
        <Logo src={logo} alt="Logo" />
        <Name>Nguyen Dinh Nhat Huy</Name>
      </LeftContent>

      <RightContent>
        <div style={{ width: "300px", height: "150px" }}>
          Astronomy picture of the day
        </div>
      </RightContent>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: black;
`;

const LeftContent = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightContent = styled.div`
  display: inline-block;
`;

const Logo = styled.img`
  width: 300px;
  height: 100px;
`;

const Name = styled.div`
    font-size: large;
    font-weight: 600;
    color: white;
`;
