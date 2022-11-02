import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getUrl, truncateText } from "../utils/index";

const SpotLight = ({ lastestData }) => {
  return (
    <StyledContainer>
      <Row>
        <StyledLeftCol xs={12} md={6} xl={5}>
          <ul>
            <Title>{lastestData?.title}</Title>
            <li>Description: {truncateText(lastestData?.explanation)}</li>
            <li>Author: {lastestData?.copyright}</li>
          </ul>
        </StyledLeftCol>
        <StyledRightCol xs={12} md={6} xl={7}>
          <Image url={getUrl(lastestData)}></Image>
        </StyledRightCol>
      </Row>
    </StyledContainer>
  );
};

export default SpotLight;

const StyledContainer = styled(Container)`
  transition: all 0.5s ease-in-out;
`;

const StyledLeftCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledRightCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  cursor: pointer;
  ${(props) => props.url && `background-image: url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;
  height: 400px;
`;

const Title = styled.li`
  list-style: none;
  font-size: 30px;
  font-weight: 700;
`;
