import styled from "styled-components";

export const Main = styled.div`
  width: 95%;
  margin: 3rem auto;
`;

export const DisplayCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
`;

export const Message = styled.h4`
  text-align: center;
`;
