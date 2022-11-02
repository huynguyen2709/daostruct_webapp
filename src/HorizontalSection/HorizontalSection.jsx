import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Item from "./Item/Item";

const HorizontalSection = ({ previousData, setUrl, handleShow }) => {
  return (
    <StyledContainer>
      {previousData?.map((element, index) => (
        <Item
          handleShow={handleShow}
          setUrl={setUrl}
          key={index}
          data={element}
        />
      ))}
    </StyledContainer>
  );
};

export default HorizontalSection;

const StyledContainer = styled(Container)`
  margin-top: 30px;
  display: flex;
  overflow-x: auto;
`;
