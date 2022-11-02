import styled from "styled-components";
import { getUrl } from "../../utils";

function Item({ data }) {
  return (
    <CardContainer>
      <CardImage src={getUrl(data)} alt="Nasa Image" />
      <CardContent>
        <TitleText>{data?.title}</TitleText>
        <Text>{data?.date}</Text>
        <Text>{data?.copyright}</Text>
      </CardContent>
    </CardContainer>
  );
}

export default Item;

const CardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 270px;
  max-height: 300px;
  margin-right: 40px;
  flex-grow: 0;
  flex-shrink: 0;
  border: 1px solid #ececec;
  border-radius: 10px;
`;

const CardImage = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-height: 180px;
  height: 75%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TitleText = styled.div`
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.div`
  font-size: 12px;
`;
