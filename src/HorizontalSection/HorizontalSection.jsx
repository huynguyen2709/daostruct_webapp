import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Item from "./Item/Item";

const HorizontalSection = ({ previousData }) => {
  return (
    <StyledContainer>
      {previousData?.map((element, index) => (
        <Item key={index} data={element} />
      ))}
    </StyledContainer>
  );
};

export default HorizontalSection;

const StyledContainer = styled(Container)`
  margin-top: 50px;
  display: flex;
  overflow-x: auto;
`;
