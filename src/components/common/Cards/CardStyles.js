import styled from "styled-components";

export const CustomCard = styled.div`
  box-shadow: 0px 0px 3px silver;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 10px silver;
  }
`;

export const Title = styled.span`
  font-size: 1.4rem;
`;

export const Icon = styled.span`
  font-size: 1.5rem;
`;

export const CardContainer = styled.div`
  padding: 1rem;
`;

export const CardContent = styled.p`
  padding: 10px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
