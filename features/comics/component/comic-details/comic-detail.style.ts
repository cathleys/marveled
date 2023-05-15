import styled from "styled-components";
export const ComicStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  @media (max-width: 64em) {
    flex-direction: column;
  }
`;
export const ComicDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 2rem 0;

  @media (max-width: 64em) {
    flex-direction: column;
  }
`;
export const ImageButtonAndAttribution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1rem;
`;
export const ComicTitle = styled.h1`
  margin-top: 0;
`;
export const SubComicTitle = styled.h3`
  padding: 1rem 0 0 0;
  margin: 0;
`;
export const CreatorStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Set the number of columns to 2
  grid-column-gap: 3.125rem;

  padding: 0 1.5rem 1.5rem 1.5rem;
`;
export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 2rem;

  @media (max-width: 64em) {
    & > ${ComicTitle} {
      font-size: 1.5rem;
      margin: 0;
    }
  }
`;
export const ImageSrc = styled.img`
  margin-bottom: 1.5rem;
  margin-right: 0.5rem;
  border: 3px solid black;
  border-radius: 0.5rem;
  box-shadow: 0px 50px 55px -51px rgba(148, 145, 148, 0.95);
`;
export const AdditionalDetails = styled.div`
  padding: 2rem;

  & > ${SubComicTitle} {
    padding-bottom: 1rem;
  }
`;
export const Variants = styled.li`
  list-style-type: none;
`;
export const VariantText = styled.p`
  color: #332c39;

  &:hover {
    color: #f2c94d;
  }
`;
export const AttributionText = styled.p`
  color: #f1f1f1;
`;
