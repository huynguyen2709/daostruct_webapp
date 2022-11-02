import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SpotLight = () => {
  return (
    <StyledContainer>
      <Row>
        <StyledLeftCol xs={12} md={6} xl={5}>
          <ul>
            <Title>Title</Title>
            <li>
              Description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ducimus officia, sit aspernatur veritatis quam illum
              officiis obcaecati facere eos hic? Architecto autem quos odit
              fugit non obcaecati mollitia. Hic, sit!
            </li>
            <li>Author</li>
          </ul>
        </StyledLeftCol>
        <StyledRightCol xs={12} md={6} xl={7}>
          <Image />
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
  background-image: url("https://picsum.photos/200/300");
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
