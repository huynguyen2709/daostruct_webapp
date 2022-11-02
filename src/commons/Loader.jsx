import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledContainer fluid>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </StyledContainer>
  );
};

export default Loader;

const StyledContainer = styled(Container)`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
