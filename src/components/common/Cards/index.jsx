import React, { useContext, useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { DataContext } from "../../../Context/DataContext";
import {
  CardContainer,
  CardContent,
  CustomCard,
  Header,
  Icon,
  Title,
} from "./CardStyles";

const Card = ({ name, id }) => {
  const { setFavDataFun, removeFavDataFun, favData } = useContext(DataContext);
  const findId = favData.find(item => item.id === id);
  const [fav, setFav] = useState(findId ? true : false);

  const handleFav = () => {
    setFav(prev => !prev);
    fav ? removeFavDataFun(id) : setFavDataFun({ name, id });
  };

  return (
    <CustomCard>
      <CardContainer>
        <Header>
          <Title>{name && name}</Title>
          <Icon onClick={handleFav}>
            {fav ? <AiFillStar /> : <AiOutlineStar />}
          </Icon>
        </Header>
        <CardContent>
          {name && name} Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Tempore, officiis!
        </CardContent>
      </CardContainer>
    </CustomCard>
  );
};

export default Card;
